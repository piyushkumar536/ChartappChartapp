import jwt from "jsonwebtoken"

// funstio to genratr a token for a user

export const generateToken = (userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET);
    return token;
}
