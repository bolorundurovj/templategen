.PHONY: help install install-cli install-local uninstall-cli uninstall-local build bundle start test test-contract test-integration test-unit lint format clean sync-version check-version

# Default target
all: build test

help: ## Show this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Available Targets:"
	@echo "  install           Install project dependencies"
	@echo "  install-cli       Build, bundle, and install CLI locally/globally"
	@echo "  uninstall-cli     Uninstall CLI locally/globally"
	@echo "  build             Compile TypeScript to dist/"
	@echo "  bundle            Compile and bundle CLI with Rollup"
	@echo "  sync-version      Synchronize package.json from version.ini"
	@echo "  check-version     Verify version.ini and package.json are in sync"
	@echo "  start             Run CLI directly with ts-node"
	@echo "  test              Run all test suites (Contract, Integration, Unit, Snapshot)"
	@echo "  test-coverage     Run all test suites with coverage report"
	@echo "  test-contract     Run contract tests verifying template definitions & hygiene"
	@echo "  test-integration  Run integration tests verifying scaffolding & live execution"
	@echo "  test-unit         Run unit tests"
	@echo "  lint              Run ESLint with auto-fix"
	@echo "  format            Format codebase using Prettier"
	@echo "  clean             Remove build output and temporary test directories"
	@echo ""

install: ## Install dependencies
	yarn install --frozen-lockfile || npm install

sync-version: ## Synchronize package.json from version.ini
	npm run version:sync

check-version: ## Verify version.ini and package.json are in sync
	npm run version:check

build: ## Compile TypeScript
	npm run build

bundle: ## Bundle CLI with Rollup
	npm run bundle

install-cli: bundle ## Build, bundle, and install CLI locally/globally
	npm install -g .

install-local: install-cli ## Alias for install-cli

uninstall-cli: ## Uninstall CLI locally/globally
	npm uninstall -g @bolorundurovb/mvcli

uninstall-local: uninstall-cli ## Alias for uninstall-cli

start: ## Start CLI in development mode
	npm start

test: ## Run all tests
	npm test

test-coverage: ## Run all tests with coverage
	npx jest --coverage

test-contract: ## Run contract tests
	npx jest tests/contract

test-integration: ## Run integration tests
	npx jest tests/integration

test-unit: ## Run unit tests
	npx jest tests/unit

lint: ## Lint codebase
	npm run lint

format: ## Format codebase
	npm run format

clean: ## Clean build and scratch directories
	node -e "const fs = require('fs'); ['dist', 'scratch/test-scaffold-output', 'scratch/test-scaffold-and-run'].forEach(p => { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }); console.log('Cleaned build artifacts and temporary files.');"
