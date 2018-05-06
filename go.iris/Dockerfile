FROM golang:latest

WORKDIR /go/src/app
COPY . .

RUN go get -d ./...
RUN go install ./...

CMD ["app"]
EXPOSE 8080