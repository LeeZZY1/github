package user

import (
	"log"
	"net/http"
)

//Counter 函数
type Counter struct {
	Count int
}

//IncrReq 函数
type IncrReq struct {
	Delta int
}

//Incr 函数
func (c *Counter) Incr(r *http.Request, req *IncrReq, res *json2.EmptyResponse) error {
	log.Printf("<- Incr %+v", *req)
	c.Count += req.Delta
	return nil
}

//GetReq 函数
type GetReq struct {
}

//Get 函数
func (c *Counter) Get(r *http.Request, req *GetReq, res *Counter) error { //
	log.Printf("<- Get %+v", *req) //
	*res = *c
	log.Printf("-> %v", *res)
	return nil
}

//UserService type

type UserService {

}

type LoginReq {
	UserName string
	Password string
}

type LoginRes {
	Token string
}

func (s *serService) Login (r *http.Request,req *LoginReq,res *LoginRes)error{
	if(LoginReq.UserName=="admin"&&LoginReq.Password=="admin"){
		LoginRes.Token="success"
	}else{
		LoginRes.Token="fail"
	}

	return err
}