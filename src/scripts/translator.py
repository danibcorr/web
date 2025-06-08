#!/usr/bin/env python3
"""
Script mejorado para traducir contenido de Docusaurus del español al inglés.
Combina la robustez de deep_translator con la preservación de estructura Markdown.
CORREGIDO para usar la estructura correcta de plugins de Docusaurus.
"""

import os
import re
import time
from typing import List, Optional, Tuple
from pathlib import Path

from deep_translator import GoogleTranslator
from tqdm import tqdm

# Configuración
DOCS_PATH = "docs"
BLOG_PATH = "blog"
OUTPUT_BASE_PATH = "i18n/en"

# Mapeo corregido: carpeta docs -> plugin de Docusaurus
DOCS_MAPPING = {
    "machine_learning": "docusaurus-plugin-content-docs-machine_learning/current",
    "others/3d_printing": "docusaurus-plugin-content-docs-others_3d_printing/current", 
    "others/music_sound": "docusaurus-plugin-content-docs-others_music_sound/current",
    "others/telecom": "docusaurus-plugin-content-docs-others_telecom/current"
}

# Blog mapping
BLOG_OUTPUT_PATH = "docusaurus-plugin-content-blog"

# Configuración del traductor
TRANSLATOR_CONFIG = {
    "source": "es",
    "target": "en",
    "max_chunk_length": 4000,
    "delay_between_requests": 1  # segundos entre peticiones para evitar rate limiting
}


class MarkdownTranslator:
    """Traductor especializado para archivos Markdown que preserva la estructura."""
    
    def __init__(self):
        self.translator = GoogleTranslator(
            source=TRANSLATOR_CONFIG["source"], 
            target=TRANSLATOR_CONFIG["target"]
        )
        self.non_translatable_patterns = [
            (r"```[\s\S]*?```", "code_block"),           # Bloques de código
            (r"`[^`\n]+`", "inline_code"),               # Código inline
            (r"<[^>]+>", "html_tag"),                    # Etiquetas HTML
            (r"!\[([^\]]*)\]\([^)]+\)", "image"),        # Imágenes
            (r"\[([^\]]+)\]\([^)]+\)", "link"),          # Enlaces
            (r"\$\$[\s\S]*?\$\$", "math_block"),        # Matemáticas en bloque
            (r"\$[^$\n]+\$", "math_inline"),            # Matemáticas inline
            (r"{{[\s\S]*?}}", "jsx_expression"),        # Expresiones JSX
            (r"{%[\s\S]*?%}", "liquid_tag"),            # Tags Liquid
            (r"<!--[\s\S]*?-->", "html_comment"),       # Comentarios HTML
            (r"^(import|export).*$", "js_import", re.MULTILINE),  # Imports/exports JS
        ]
    
    def _extract_frontmatter(self, content: str) -> Tuple[str, str]:
        """Extrae el frontmatter YAML del contenido."""
        frontmatter_match = re.match(r"^(---[\s\S]*?---)([\s\S]*)", content)
        if frontmatter_match:
            return frontmatter_match.groups()
        return "", content
    
    def _preserve_non_translatable_content(self, content: str) -> Tuple[str, dict]:
        """Reemplaza contenido no traducible con placeholders y retorna mapeo."""
        placeholders = {}
        modified_content = content
        placeholder_counter = 0
        
        for pattern, content_type, *flags in self.non_translatable_patterns:
            regex_flags = flags[0] if flags else 0
            
            def replace_match(match):
                nonlocal placeholder_counter
                placeholder = f"__PLACEHOLDER_{placeholder_counter}__"
                placeholders[placeholder] = match.group(0)
                placeholder_counter += 1
                return placeholder
            
            modified_content = re.sub(pattern, replace_match, modified_content, flags=regex_flags)
        
        return modified_content, placeholders
    
    def _restore_non_translatable_content(self, content: str, placeholders: dict) -> str:
        """Restaura el contenido no traducible usando los placeholders."""
        for placeholder, original_content in placeholders.items():
            content = content.replace(placeholder, original_content)
        return content
    
    def _split_text_smart(self, text: str, max_length: int) -> List[str]:
        """Divide el texto inteligentemente preservando párrafos y estructura."""
        if len(text) <= max_length:
            return [text]
        
        # Intentar dividir por párrafos primero
        paragraphs = text.split('\n\n')
        chunks = []
        current_chunk = ""
        
        for paragraph in paragraphs:
            if len(current_chunk) + len(paragraph) + 2 <= max_length:
                current_chunk += paragraph + '\n\n'
            else:
                if current_chunk:
                    chunks.append(current_chunk.strip())
                
                # Si el párrafo es muy largo, dividirlo por líneas
                if len(paragraph) > max_length:
                    lines = paragraph.split('\n')
                    temp_chunk = ""
                    for line in lines:
                        if len(temp_chunk) + len(line) + 1 <= max_length:
                            temp_chunk += line + '\n'
                        else:
                            if temp_chunk:
                                chunks.append(temp_chunk.strip())
                            temp_chunk = line + '\n'
                    current_chunk = temp_chunk
                else:
                    current_chunk = paragraph + '\n\n'
        
        if current_chunk:
            chunks.append(current_chunk.strip())
        
        return chunks
    
    def _translate_text_with_retry(self, text: str, max_retries: int = 3) -> str:
        """Traduce texto con reintentos en caso de error."""
        text = text.strip()
        if not text:
            return text
            
        for attempt in range(max_retries):
            try:
                time.sleep(TRANSLATOR_CONFIG["delay_between_requests"])
                translated = self.translator.translate(text)
                return translated if translated else text
            except Exception as e:
                if attempt == max_retries - 1:
                    print(f"Error traduciendo después de {max_retries} intentos: {e}")
                    return text
                time.sleep(2 ** attempt)  # Backoff exponencial
        
        return text
    
    def translate_markdown_content(self, content: str) -> str:
        """Traduce el contenido Markdown preservando la estructura."""
        # Extraer frontmatter
        frontmatter, body = self._extract_frontmatter(content)
        
        if not body.strip():
            return content
        
        # Preservar contenido no traducible
        modified_body, placeholders = self._preserve_non_translatable_content(body)
        
        # Dividir en chunks y traducir
        chunks = self._split_text_smart(modified_body, TRANSLATOR_CONFIG["max_chunk_length"])
        translated_chunks = []
        
        for chunk in chunks:
            translated_chunk = self._translate_text_with_retry(chunk)
            translated_chunks.append(translated_chunk)
        
        # Unir chunks traducidos
        translated_body = '\n\n'.join(translated_chunks)
        
        # Restaurar contenido no traducible
        translated_body = self._restore_non_translatable_content(translated_body, placeholders)
        
        # Combinar frontmatter y cuerpo traducido
        return f"{frontmatter}\n{translated_body}" if frontmatter else translated_body


def translate_file(input_path: str, output_path: str, translator: MarkdownTranslator) -> bool:
    """Traduce un archivo individual."""
    try:
        # Crear directorio de salida si no existe
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        # Leer archivo original
        with open(input_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Traducir contenido
        translated_content = translator.translate_markdown_content(content)
        
        # Escribir archivo traducido
        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(translated_content)
        
        return True
    except Exception as e:
        print(f"Error procesando {input_path}: {e}")
        return False


def translate_docs_folder(input_folder: str, plugin_output_path: str, translator: MarkdownTranslator) -> None:
    """Traduce una carpeta de documentos específica."""
    input_path = Path(DOCS_PATH) / input_folder
    # CORREGIDO: usar OUTPUT_BASE_PATH en lugar de OUTPUT_DOCS_PATH
    output_path = Path(OUTPUT_BASE_PATH) / plugin_output_path
    
    if not input_path.exists():
        print(f"⚠️  La carpeta {input_path} no existe, saltando...")
        return
    
    # Recopilar archivos a traducir
    markdown_files = list(input_path.rglob("*.md"))
    
    if not markdown_files:
        print(f"⚠️  No se encontraron archivos .md en {input_path}")
        return
    
    print(f"📁 Traduciendo {len(markdown_files)} archivos de {input_folder}...")
    
    success_count = 0
    for file_path in tqdm(markdown_files, desc=f"Traduciendo {input_folder}"):
        relative_path = file_path.relative_to(input_path)
        output_file_path = output_path / relative_path
        
        if translate_file(str(file_path), str(output_file_path), translator):
            success_count += 1
    
    print(f"✅ {success_count}/{len(markdown_files)} archivos traducidos correctamente")


def translate_blog(translator: MarkdownTranslator) -> None:
    """Traduce la carpeta del blog."""
    blog_path = Path(BLOG_PATH)
    # CORREGIDO: usar OUTPUT_BASE_PATH y BLOG_OUTPUT_PATH
    output_path = Path(OUTPUT_BASE_PATH) / BLOG_OUTPUT_PATH
    
    if not blog_path.exists():
        print(f"⚠️  La carpeta {blog_path} no existe, saltando blog...")
        return
    
    markdown_files = list(blog_path.rglob("*.md"))
    
    if not markdown_files:
        print(f"⚠️  No se encontraron archivos .md en {blog_path}")
        return
    
    print(f"📝 Traduciendo {len(markdown_files)} archivos del blog...")
    
    success_count = 0
    for file_path in tqdm(markdown_files, desc="Traduciendo blog"):
        relative_path = file_path.relative_to(blog_path)
        output_file_path = output_path / relative_path
        
        if translate_file(str(file_path), str(output_file_path), translator):
            success_count += 1
    
    print(f"✅ {success_count}/{len(markdown_files)} archivos del blog traducidos correctamente")


def main():
    """Función principal del script."""
    print("🚀 Iniciando proceso de traducción...")
    print(f"📖 Español → Inglés")
    print("-" * 50)
    
    # Inicializar traductor
    translator = MarkdownTranslator()
    
    # Traducir carpetas de documentación
    print("📚 Traduciendo documentación...")
    for docs_folder, plugin_path in DOCS_MAPPING.items():
        translate_docs_folder(docs_folder, plugin_path, translator)
        print()
    
    # Traducir blog
    translate_blog(translator)
    
    print("-" * 50)
    print("🎉 ¡Proceso de traducción completado!")
    print(f"📁 Archivos generados en:")
    for docs_folder, plugin_path in DOCS_MAPPING.items():
        print(f"   - {OUTPUT_BASE_PATH}/{plugin_path}")
    print(f"   - {OUTPUT_BASE_PATH}/{BLOG_OUTPUT_PATH}")


if __name__ == "__main__":
    main()