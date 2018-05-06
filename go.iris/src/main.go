package main

import (
	"fmt"
	"os"
	"routes"
	"github.com/kataras/iris"
)

func main() {
	var PORT = os.Getenv("PORT")
	var ADDRESS = os.Getenv("ADDRESS")

	if PORT == "" {
		PORT = "8080"
	}

	if ADDRESS == "" {
		ADDRESS = "0.0.0.0"
	}

	app := iris.Default()

	app.Handle("GET", "/", routes.IndexGet)
	app.Handle("GET", "/posts", routes.PostsGet)
	app.Handle("POST", "/posts", routes.PostsPost)

	app.Run(iris.Addr(fmt.Sprintf("%s:%s", ADDRESS, PORT)))
}
