const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isVoted:{
        type:Boolean,
        default:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    verificationCode:String
},{timestamps:true});






//secure the password using bcrypt
userSchema.pre("save",async function(next) {
    //console.log(this);
    
    const user=this;
    //if old password
    if(!user.isModified("password")){
        next();
    }
    //else new password so hash it
    try {
        const hashRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,hashRound);
        user.password=hash_password;

    } catch (error) {
        next(error);
    }
});






//generateToken function
userSchema.methods.generateToken=async function () {
   try {
    //to generate token
    return jwt.sign(
        {
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
    );
   } catch (error) {
        console.error(error);
   } 
};


//comparePassword function
userSchema.methods.comparePassword=async function (password) {
    return bcrypt.compare(password,this.password);
}






//define model
const User=new mongoose.model("User",userSchema);
module.exports=User;