.PHONY: setup-i18n run run-en check-outdated update build build-en serve all

.DEFAULT_GOAL := all

setup-i18n:
	@echo "Configurando archivos de traducción para inglés..."
	@npm run write-translations -- --locale en
	@echo "✅ Archivos de traducción configurados."

run:
	@echo "Testear la Wiki localmente (español)..."
	@npm run start

run-en:
	@echo "Testear la Wiki localmente (inglés)..."
	@npm run start -- --locale en

check-outdated:
	@echo "Comprobar dependencias..."
	@npm outdated
	@echo "✅ Dependencias comprobadas."

update:
	@echo "Actualizar dependencias..."
	@npm update
	@echo "✅ Dependencias actualizadas."

build:
	@echo "Formateo con Prettier..."
	@npm run pretty
	@echo "✅ Formateo realizado."
	@echo "Limpiando cache..."
	@yarn cache clean
	@echo "✅ Caché limpiada."
	@echo "Instalando las dependencias..."
	@yarn install
	@echo "✅ Dependencias instaladas."
	@echo "Construyendo la documentación (todos los idiomas)..."
	@yarn build
	@echo "✅ Documentación construida."

build-en:
	@echo "Formateo con Prettier..."
	@npm run pretty
	@echo "✅ Formateo realizado."
	@echo "Limpiando cache..."
	@yarn cache clean
	@echo "✅ Caché limpiada."
	@echo "Instalando las dependencias..."
	@yarn install
	@echo "✅ Dependencias instaladas."
	@echo "Construyendo la documentación (solo inglés)..."
	@npm run build -- --locale en
	@echo "✅ Documentación en inglés construida."

serve:
	@echo "Sirviendo la documentación construida..."
	@npm run serve

all: build run