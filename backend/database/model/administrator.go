package model

import "fmt"

type Administrator struct {
	UserID        int
	User          User `pg:"rel:has-one"`
	InstitutionID int
	Institution   Institution `pg:"rel:has-one"`
}

func (a Administrator) String() string {
	return fmt.Sprintf("Administrator<%v, %v>", a.User, a.Institution)
}
