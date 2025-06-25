import jwt from 'jsonwebtoken'

// middleware function todecode the clerk id

const authUser = async(req, res, next ) => {
    try {
        const {token } =req.headers
        
        if(!token){
            return res.json({success:false , message:'Not Authorized again'})
        }
        const token_decode = jwt.decode(token);

        req.body.clerkId = token_decode.clerkId
        next();
        
        
    } catch (error) {
        console.log(error.message);
        res.json({success:true , message: error.meessage})
        
    }
}
export default authUser;