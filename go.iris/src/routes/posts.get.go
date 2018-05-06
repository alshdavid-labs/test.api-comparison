package routes

import (
	"services"
	"github.com/kataras/iris"
)

func PostsGet(ctx iris.Context) {
	ctx.JSON(services.Get())
}