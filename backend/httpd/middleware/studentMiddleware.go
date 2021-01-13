package middleware

// make sure to import the model for the db
import "github.com/gin-gonic/gin"

// IsStudent handler
// Type: Middleware
// url: /user/:uid/enroll/:cid
func IsStudent() gin.HandlerFunc {
	return func(c *gin.Context) {
		// userID := c.Param("uid") use this uid for checking
		// courseID := c.Param("cid")
		// TODO:
		// 1. Check uid belongs to a registered student
		// 2. Check cid belongs to existing course
	}
}

// AbleToReply handler
// Type: Middleware
// url: /user/:uid/:cid/replyToPost/:tid
func AbleToReply() gin.HandlerFunc {
	return func(c *gin.Context) {
		// userID := c.Param("uid") use this uid for checking
		// courseID := c.Param("cid")
		// threadID := c.Param("tid")
		// TODO:
		// 1. Check tid belongs to existing thread
	}
}
