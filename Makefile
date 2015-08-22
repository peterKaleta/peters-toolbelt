.PHONY: clean build install dev lint lint-quiet test-server test

clean:
	rm -rf ./dist

init:
	make install
	make setup-hooks

install:
	./scripts/install.sh

setup-hooks:
	./scripts/setup-hooks.sh

build:
	make clean
	./scripts/build.sh

lint:
	./scripts/lint.sh
