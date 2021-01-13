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
- cname = course_name
- ccode = course_code
- semid = semester_id
- isarc = is_archived

### Structure

```text
.
├── backend
|   |── httpd
|   |   |── actions                         # Contains the routes for a registered user, actions include: enrollment, post creation, replies, etc.
|   |   |   └── actionsRoutes.go
|   |   |── auth
|   |   |   └── authRoutes.go               # Contains the authRouter functions Login, and Register
|   |   |── middleware
|   |   |   |── instructorMiddleware.go     # Contains middleware for authenticating instructors and their privileges
|   |   |   └── studentMiddleware.go        # Contains middleware for authentication the student is registered, and the actions are valid
|   |   └── main.go
|   |
..................
```

### Auth

File: authRoutes.go

Functions:

- Login
- Register

Methods:

- POST

The _authRoutes_ file contains the functions for login and registering users. The required parameters and JSON format are
provided in the comments of the functions.

The functions all correspond to urls of the form /auth/*type, where *type is either login or register.

### Actions

File: actionsRoutes.go

Functions:

- Enroll
- CreatePost
- Reply
- Comment
- DeletePost
- Upvote
- CreateCourse
- ArchiveCourse

Methods:

- PATCH
- POST
- DELETE

The _actionRoutes_ file contains the functions for user actions. The required parameters and JSON format are
provided in the comments of the functions. The functions above have authentication middleware to determine whether certain users
have permisson to commit certain actions.

The functions all correspond to urls of the form /user/:uid, where uid is the user id.

### CORS

Currently we have given access to http://localhost:3000, and "https://dialog-gamma.vercel.app/" as the origin source for making calls to the backend. When pushing
the app to production we can change this to only be the url where the frontend is hosted.
