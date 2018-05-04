package main

import "fmt"
import "encoding/json"
import fasthttp "github.com/valyala/fasthttp"

func fastHTTPHandler(ctx *fasthttp.RequestCtx) {
	ctx.Response.Header.Set("content-type", "application/json")
	ctx.Response.Header.Set("accept", "application/json")
	mapD := map[string]string{"message": "pong"}
	mapB, _ := json.Marshal(mapD)
	fmt.Fprintf(ctx, string(mapB))
}

func main() {
	fasthttp.ListenAndServe(":8080", fastHTTPHandler)
}
