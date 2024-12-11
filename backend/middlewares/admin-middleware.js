const adminMiddleware=async(req,res,next)=>{
    try {
        //console.log(req.user);
        //res.status(200).json({message:req.user});
        const adminRole=req.user.isAdmin;
        if(!adminRole){
            res.status(403).json({message:"Access denied,User is not an Admin"});
        }
        //else useer is admin,so call next function,it directly goes to next function
        next();
        
    } catch (error) {
        next(error);
    }
};
module.exports=adminMiddleware;