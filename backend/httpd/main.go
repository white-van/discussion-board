package main

import (
	"regexp"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	Actions "pizza/httpd/actions"
	Auth "pizza/httpd/auth"
	Middleware "pizza/httpd/middleware"
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
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// This is the router group for matching all urls with /auth
	// The functions are all contained inside the auth directory's routes.go
	authRouter := r.Group("/auth")
	{
		// Matches url /auth/login and uses the Login function to handle the request
		authRouter.POST("/login", Auth.Login)
		// Matches url /auth/register and uses the Register function to handle the request
		authRouter.POST("/register", Auth.Register)
	}

	// This is the router group for matching all urls with /user/:uid
	userRouter := r.Group("/user/:uid")
	{
		// TODO: Authentication Middleware for uid and cid
		userRouter.POST("/enroll/:cid", Middleware.IsStudent(), Actions.Enroll)
		userRouter.POST("/:cid/createPost", Middleware.IsStudent(), Actions.CreatePost)
		// TODO: Authentication Middleware for uid, cid, and tid: Required
		userRouter.POST("/:cid/replyToPost/:tid", Middleware.IsStudent(), Middleware.AbleToReply(), Actions.Reply)
		userRouter.POST("/:cid/:tid/comment", Actions.Comment)
		userRouter.DELETE("/:cid/:tid/deletePost", Actions.DeletePost)
		// TODO: Authentication Middleware for uid, cid, tid, comid: Required
		userRouter.PATCH("/:cid/:tid/:comid/upvote", Actions.Upvote)

		// These two are special routes available only to instructors for creating courses and archiving them.
		// TODO: Authentication Middleware to check uid belongs to instructor thus they have "create course" privileges
		userRouter.POST("/createCourse", Middleware.IsInstructor(), Actions.CreateCourse)
		// TODO: Authentication Middleware to check uid belongs to instructor thus they have "archive course" privileges, and
		// check course with cid actually exists, check if the instructor is the instructor of course with id cid
		userRouter.PATCH("/:cid/archiveCourse", Middleware.IsInstructor(), Middleware.InstructorIsAuthor(), Actions.ArchiveCourse)
	}

	err := r.Run() // listen and serve on 0.0.0.0:3001 (for windows "localhost:3001")
	if err != nil {
		panic("Failed to start server")
	}
}
