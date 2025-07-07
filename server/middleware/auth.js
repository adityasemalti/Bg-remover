import jwt from 'jsonwebtoken'

//middleware to decode jwt token

const authUser = async(req,res,next)=>{
    try {
        const {token} = req.headers
        if(!token)
            { return res.json({success:false, message:"Not authorised login again"})
    }
            const token_decode = jwt.decode(token)
        req.clerkId= token_decode.clerkId
        
        next()
    } catch (error) {
         console.log("error in auth js", error.message )
        res.json({success:false, message:error.message})
    }
}

export default authUser;