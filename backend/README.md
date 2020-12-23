# Dialog Backend

## Design

We are using Go-lang for the backend. More specifically the [Gin](https://github.com/gin-gonic/gin) web framework for the API, and plans for [Gorilla](https://github.com/gorilla/websocket) as the web socket.

## Routes

We will require routes for the user to be able to enroll into classes, make posts, reply to posts, etc. These should all be grouped under a user route, where we use either the users name or id
in the route itself for the ability to "enroll" them into a class.

Some terminology:

- uid = user_id
- cid = course_id
- tid = thread_id
- comid = comment_id

### Structure

userRouter := router.Group("/user"){

    userRouter.POST("/register", handleUserRegister)
    // The request respondst to the url matching "/user/register" and should include
    // information such as first_name, last_name, email. How is user_id being generated? will it be given to us in the request or is is
    // it made automatically in the database and sent to the front end in a different call

    userRouter.POST("/login", handleUserLogin)
    // The request responds to the url matching "/user/login" and should include
    // parameters we require for authentication (this will be done later), we can send the user_id to the front end as a response here

    Should we add a reset password for a user route when we add authentication ? (Y)

    userRouter.POST("/resetPassword", handleResetPassword)
    // The request responds to the url matching "/user/resetPassword" and should include the users email
    // in the request

}

The following are all routes for a specific user based on their _uid_. Certain routes should only be accessible to professors, e.g. course creation, and archive course.

specificUserRouter := router.Group("/user/:uid"){

    **uid is a prerequiste for all requests below**

    specificUserRouter.POST("/enroll", handleEnrollment) // The request responds to url matching: "/user/:uid/enroll?course=:cid"

    specificUserRouter.POST("/:cid/createPost", handleCreatePost) // The request responds to url matching "/user/:uid/:cid/createPost"

    specificUserRouter.POST("/:cid/replyToPost", handleReplyToPost) // This route can be used for a user replying to posts made,
    // the request should include information about the post that can be used to find it (tid?)

    specificUserRouter.POST("/:cid/:tid/createComment", handleComment) // The request responds to the url matching: "/user/:uid/:cid/:tid/createComment"
    // Since each comment is specific to a thread in a specific course we will require cid, and tid for comments along with the prerequiste uid as well

    specificUserRouter.DELETE("/:cid/:tid", handleDeletePost) // The request responds to the url matching "/users/:uid/:cid/:tid/deletePost"
    // Middleware will be required to make sure only the author of the post, or an instructor is able to delete the post
    // for author authentication we can check the uid supplied with the author entry of the thread

    specificUserRouter.PATCH("/:cid/:tid/:comid/upvote", handleUpvote) // The request responds to the url matching "/users/:uid/:cid/:tid/:comid/upvote"
    // This is an update method that allows users to upvote comments on a given post.

    Do we make some middleware for the routes below to make sure the user here is a professor and is allowed to create/archive courses?

    specificUserRouter.POST("/createCourse", handleCourseCreation) // This request responds to url matching "/user/:uid/createCourse"
    // This can be used by a professor to create a course, we require cid ? (how is this generated), course_name, course_code, semester_id, and is_archived
    // for the db entry

    specificUserRouter.POST("/:cid/archiveCourse", handleArchiveCourse) // This request responds to the url matching "/user/:uid/:cid/archiveCourse"
    // and is used for archiving a course in the db, we require the cid for looking up the course in the db, and we can just update the is_archived value to be true

}
