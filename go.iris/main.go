package main

import (
	"fmt"
	"os"

	"github.com/kataras/iris"
)

func getPosts(ctx iris.Context) {
	ctx.JSON([]int{1, 2, 3, 4})
}

func main() {
	ADDRESS := fmt.Sprintf("%s:%s", os.Getenv("ADDRESS"), os.Getenv("PORT"))
	app := iris.Default()

	app.Handle("GET", "/", func(ctx iris.Context) {
		ctx.HTML("Hello world!")
	})

	app.Handle("GET", "/posts", getPosts)

	app.Run(iris.Addr(ADDRESS))
}
