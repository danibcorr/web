.PHONY: setup-i18n dev build serve format install clean typecheck all
.DEFAULT_GOAL := all

setup-i18n:
	@echo "Setting up translations..."
	@npm run write-translations
	@echo "✅ Translations configured"

dev:
	@echo "Starting development server..."
	@npm run start

build: format install
	@echo "Building site..."
	@npm run build
	@echo "✅ Site built"

serve:
	@echo "Serving site..."
	@npm run serve

format:
	@echo "Formatting code..."
	@npm run pretty
	@echo "✅ Code formatted"

install:
	@echo "Installing dependencies..."
	@npm install
	@echo "✅ Dependencies installed"

clean:  
	@echo "Cleaning cache and dependencies..."
	@npm run clear
	@rm -rf node_modules package-lock.json
	@echo "✅ Cleaned cache and dependencies"

typecheck:
	@echo "Type checking..."
	@npm run typecheck
	@echo "✅ Types checked"

all: build