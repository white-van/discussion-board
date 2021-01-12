package main

import (
	"pizza/database"
	"regexp"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// This allows for front end calls made from the origin source
	// http://localhost:3000
	// This will need to be changed/updated to either be "*", ie
	// allow all origins (which could be bad for security), or
	// the url for where ever we host our front end.
	// All RESTful api methods are allowed
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "https://dialog-gamma.vercel.app/"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Content-Length"},
		ExposeHeaders:    []string{"Origin", "Content-Type", "Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			matched, err := regexp.MatchString("^(https?:\\/\\/(((?:.+)?\\.white-van\\.vercel\\.app\\/)|(localhost:3000)))$", origin)
			if err != nil {
				panic("Error validating origin source")
			}
			return matched
		},
	}))

	db := database.Connect()
	defer db.Close()
	database.CreateSchema(db)

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	err := r.Run() // listen and serve on 0.0.0.0:3001 (for windows "localhost:3001")
	if err != nil {
		panic("Failed to start server")
	}
}
