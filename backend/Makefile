include var.env
export $(shell sed 's/=.*//' var.env)

run:
	go run httpd/main.go

build:
	go build -o bin/pizza httpd/main.go