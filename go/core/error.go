package core

type IpGeolocationApi4Error struct {
	IsIpGeolocationApi4Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpGeolocationApi4Error(code string, msg string, ctx *Context) *IpGeolocationApi4Error {
	return &IpGeolocationApi4Error{
		IsIpGeolocationApi4Error: true,
		Sdk:              "IpGeolocationApi4",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpGeolocationApi4Error) Error() string {
	return e.Msg
}
