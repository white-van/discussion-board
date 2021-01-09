package model

import "fmt"

type User struct {
	ID            int
	FirstName     string `pg:"type:varchar(255)"`
	LastName      string `pg:"type:varchar(255)"`
	PreferredName string `pg:"type:varchar(255)"`
	Email         string `pg:",notnull,unique,type:varchar(255)"`
}

func (u User) String() string {
	return fmt.Sprintf("User<%d, %s, %s, %s, %s>", u.ID, u.FirstName, u.LastName, u.PreferredName, u.Email)
}
