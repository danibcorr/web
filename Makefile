.PHONY: translate run check-outdated update build all

.DEFAULT_GOAL := all

translate:
	@echo "Traducir en inglés el contenido de la Wiki..."
	@poetry run python ./scripts/translator_2.py
	@echo "✅ Traducción realizada."

run:
	@echo "Testear la Wiki localmente..."
	@npm run start

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
	@echo "✅ Dependencias realizadas."

	#@echo "Creando los ficheros de configuración para la traducción..."
	#npm run write-translations
	
	@echo "Construyendo la documentación..."
	@yarn build
	@echo "✅ Documentación construida."

all: build run
