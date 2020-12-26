include var.env
export $(shell sed 's/=.*//' var.env)

.PHONY: httpd
httpd:
	go run httpd/main.go

.PHONY: wss
wss:
	go run wss/*

build:
	go build -o bin/pizza httpd/main.go

lint: build-lint
	docker run lint:latest

build-lint:
	docker build -f Dockerfile.lint . -t lint