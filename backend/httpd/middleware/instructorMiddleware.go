package middleware

// make sure to import the model for the db
import "github.com/gin-gonic/gin"

// IsInstructor handler
// Type: Middleware
// url: /user/:uid/createCourse
func IsInstructor() gin.HandlerFunc {
	return func(c *gin.Context) {
		// userID := c.Param("uid") use this uid for checking
		// TODO:
		// 1. Check uid belongs to an instructor. Not sure how we determine this yet
	}
}

// InstructorIsAuthor handler
// Type: Middleware
// url: /user/:uid/:cid/archiveCourse
func InstructorIsAuthor() gin.HandlerFunc {
	return func(c *gin.Context) {
		// TODO:
		// 1. Check if the instructor is the author for the course with id cid
		// 2. If Step 1 passes, return
	}
}
