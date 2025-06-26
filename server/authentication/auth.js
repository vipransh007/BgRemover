import jwt from 'jsonwebtoken'

// middleware function todecode the clerk id

const authUser = async(req, res, next ) => {
    try {
        const {token } = req.headers
        
        if(!token){
            return res.json({success:false , message:'Not Authorized again'})
        }
        const token_decode = jwt.decode(token);

        req.clerkId = token_decode.clerkId;
        next();
        
        
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message: error.message})
        
    }
}
export default authUser;