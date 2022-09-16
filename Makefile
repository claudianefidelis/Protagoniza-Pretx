dc\:build:
	docker-compose build

dc\:start:
	docker-compose up

setup:
	cp .env.example .env
	make dc\:build
