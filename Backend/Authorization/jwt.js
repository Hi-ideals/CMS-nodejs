import jwt from 'jsonwebtoken'

export let generateToken=(email)=>{
    let token=jwt.sign({email},process.env.SECRETKEY)
    return token;  
}