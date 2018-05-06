FROM golang:latest

WORKDIR /go/src/app
COPY . .

RUN cd ./src && go get -d ./...
RUN go build

CMD ["app"]
EXPOSE 8080