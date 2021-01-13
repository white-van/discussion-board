package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// ExistingUser Binding from JSON for Login
type ExistingUser struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// NewUser Binding from JSON for Register
type NewUser struct {
	Firstname string `json:"firstname" binding:"required"`
	Lastname  string `json:"lastname" binding:"required"`
	Email     string `json:"email" binding:"required"`
}

// Login Handler Function
// Method: POST
// url: /auth/login
// Requirements: (can be changed later, this is just the skeleton)
// 	- email
//	- password
// In JSON format: ({"email": "email@mail.com", "password": "password"})
func Login(c *gin.Context) {
	var user ExistingUser
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// TODO:
	// 1. Authenticate the user based on their info
	// 2. "Log them in" if successful, i.e., return relevant information to frontend
	//     else, we return error message such as "User does not exist"
	c.JSON(http.StatusOK, gin.H{"status": "Logged In", "email": user.Email})
}

// Register Handler Function
// Method: POST
// url: /auth/register
// RequirementsL
//  - firstname
//  - lastname
//  - email
//  - password (This will be added later on, once password field is added to DB, and updated in the user model)
// in JSON format: ({"firstname":"first", "lastname":"last", "email":"email"})
func Register(c *gin.Context) {
	var user NewUser
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// TODO:
	// 1. Create the user model (use the model in backend/storage)
	// 2. Add user to db using GORM
	// 3. Log in the user automatically, ie., send the frontend all the relevant information
	//    you would when a user logs in.
	c.JSON(http.StatusOK, gin.H{"status": "You have Registered!", "email": user.Email})
}
