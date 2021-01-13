package actions

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Course struct for binding JSON to
// JSON: {cname: "course name", ccode: "CSC4000", cpass: "course password", semid: semesterID, isarc: false}
type Course struct {
	CourseName     string `json:"cname" binding:"required"`
	CourseCode     string `json:"ccode" binding:"required"`
	CoursePassword string `json:"cpass" binding:"required"`
	SemesterID     int    `json:"semid" binding:"required"`
	IsArc          bool   `json:"isarc" binding:"required"`
}

// Enroll Handler Function
// Method: POST
// url: /user/:uid/enroll/:cid"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid,
//  - Param: cid,
func Enroll(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")

	// TODO:
	// 1. Add user to enrolment table with cid and position type student

	c.JSON(http.StatusOK, gin.H{"status": "You have been enrolled", "user": userID, "course": courseID})
}

// CreatePost Handler Function
// Method: POST
// url: /user/:uid/:cid/createPost"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid,
//  - Param: cid,
func CreatePost(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")

	// TODO:
	// 1. Create Thread with user as author

	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID, "course": courseID})
}

// Reply Handler Function
// Method: POST
// url: /user/:uid/:cid/replyToPost/:tid"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid,
//  - Param: cid,
//  - Query: tid,
func Reply(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")
	threadID := c.Param("tid")
	// TODO:
	// 1. Add reply to thread with user as author to reply

	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID, "course": courseID, "threadID": threadID})
}

// Comment Handler Function
// Method: POST
// url: /user/:uid/:cid/:tid/comment"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid,
//  - Param: cid,
//  - Param: tid,
func Comment(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")
	threadID := c.Param("tid")
	// TODO:
	// 1. Find thread/post
	// 2. Add comment to post with user as author

	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID, "course": courseID, "threadID": threadID})
}

// DeletePost Handler Function
// Method: DELETE
// url: /user/:uid/:cid/:tid/deletePost"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid,
//  - Param: cid,
//  - Param: tid,
func DeletePost(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")
	threadID := c.Param("tid")
	// TODO:
	// 1. Find post
	// 2. Delete Post from database

	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID, "course": courseID, "threadID": threadID})
}

// Upvote Handler Function
// Method: PATCH
// url: /user/:uid/:cid/:tid/:comid/upvote"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid,
//  - Param: cid,
// 	- Param: tid,
//  - Param: comid,
func Upvote(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")
	threadID := c.Param("tid")
	commentID := c.Param("comid")
	// TODO:
	// 1. Add upvote to the comment, and update anything related to the comment

	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID, "course": courseID, "threadID": threadID, "commentID": commentID})
}

// CreateCourse Handler Function
// Method: POST
// url: /user/:uid/createCourse"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid
//  - We require course information in json format
// JSON: {cname: "course name", ccode: "CSC4000", cpass: "course password", close: "closing at", semid: semesterID, isarc: false}
func CreateCourse(c *gin.Context) {
	userID := c.Param("uid")
	var course Course
	if err := c.ShouldBindJSON(&course); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// TODO:
	// 1. Create Course from model
	// 2. Add to db
	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID})
}

// ArchiveCourse Handler Function
// Method: PATCH
// url: /user/:uid/:cid/archiveCourse"
// Requirements: (can be changed later, this is just the skeleton)
// 	- Param: uid
//  - We require course information in json format
func ArchiveCourse(c *gin.Context) {
	userID := c.Param("uid")
	courseID := c.Param("cid")
	// TODO:
	// 1. Find course with cid
	// 2. Update its is_archived parameter to be false
	c.JSON(http.StatusOK, gin.H{"status": "You have created a Post!", "user": userID, "course": courseID})
}
