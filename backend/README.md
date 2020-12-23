# Pizza Backend

## Design

We are using Go-lang for the backend. More specifically the [Gin](https://github.com/gin-gonic/gin) web framework for the API, and plans for [Gorilla](https://github.com/gorilla/websocket) as the web socket.

## Routes

We will require routes for the user to be able to enroll into classes, make posts, reply to posts, etc. These should all be grouped under a user route, where we use either the users name or id
in the route itself for the ability to "enroll" them into a class.

### Structure

user_router := router.Group("/user"){

    user_router.POST("/register", handleUserRegister) // The request respondst to the url matching "/user/register" and should include
    // information such as first_name, last_name, email. How is user_id being generated? will it be given to us in the request or is is
    // it made automatically in the database and sent to the front end in a different call

    user_router.POST("/login", handleUserLogin) // The request responds to the url matching "/user/login" and should include
    // parameters we require for authentication (this will be done later), we can send the user_id to the front end as a response here

}

The following are all routes for a specific user based on their user_id. Certain routes should only be accessible to professors, e.g. course creation, and archive course.

specific_user_router := router.Group("/user/:user_id"){

    specific_user_router.POST("/enroll", handleEnrollment) // The request responds to url matching: "/user/:user_id/enroll?course=:course_id"

    specific_user_router.POST("/:course_id/createPost", handleCreatePost) // The request responds to url matching "/user/:user_id/:course_id/createPost"

    specific_user_router.POST("/:course_id/replyToPost", handleReplyToPost) // This route can be used for a user replying to posts made,
    // the request should include information about the post that can be used to find it (thread_id?)

    Do we make some middleware for the routes below to make sure the user here is a professor and is allowed to create/archive courses?

    specific_user_router.POST("/createCourse", handleCourseCreation) // This request responds to url matching "/user/:user_id/createCourse"
    // This can be used by a professor to create a course, we require course_id ? (how is this generated), course_name, course_code, semester_id, and is_archived
    // for the db entry

    specific_user_router.POST("/:course_id/archiveCourse", handleArchiveCourse) // This request responds to the url matching "/user/:user_id/:course_id/archiveCourse"
    // and is used for archiving a course in the db, we require the course_id for looking up the course in the db, and we can just update the is_archived value to be true

}
