import jwt from 'jsonwebtoken'

//psychologist authentication middleware
const authPsychologist = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if(!dtoken) {
      return res.json({success: false, message: "Access Denied"})
    }
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

    req.body.psyId  = token_decode.id
    // if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
    //   return res.json({success: false, message: 'Not Authorized Login Again'})
    // }
    next();
    
  } catch (error) {
    console.log(error)
    res.join({success: false, message: error.message});
  }
}
export default authPsychologist