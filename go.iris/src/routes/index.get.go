package routes

import ("github.com/kataras/iris")
 
func IndexGet(ctx iris.Context) {
	ctx.HTML("Hello world!")
}