FROM golang:buster

RUN apt-get update
RUN apt-get install curl
WORKDIR /app

COPY . .

RUN curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.33.0
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

RUN go mod download
RUN go mod vendor

ENV PORT=3001

CMD [ "air" ]