const { SendVerificationCode } = require("../middlewares/Email");
const User=require("../models/user-model")
const bcrypt=require('bcryptjs');




//home logic
const home=async(req,res)=>{
    try {
        res.status(200).send("Hello world 2");
    } catch (error) {
        console.log(error);
        
    }
}



// *-------------------
// Registation Logic
// *-------------------
const register=async(req,res)=>{
    try {
        //fetch the userData(username,phone,password) basis on User model
        const { username,email,phone,password } =req.body;

        //cheak email is already exist or not
        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"email already exist"});
        }
        

        //hash the password
        /*
        const hashRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(password,hashRound);
        */

        //else store the model data or registation data into the database
        
        //generate verification code
        
        
        
        const verificationCode=Math.floor(100000+Math.random()* 900000).toString()
        const userCreated=await User.create({username,email,phone,password,verificationCode});

        //console.log("Sending verification email to:", email, "with code:", verificationCode);

        //call the sendverificationCode logic
        await SendVerificationCode(email,verificationCode);

        res.status(200).json({
            msg:"Registation successfull", 
            token:await userCreated.generateToken(), 
            userId:userCreated._id.toString(),
            verificationCode:userCreated.verificationCode
        });
       
        
        
    } catch (error) {
        console.error("Error during registration:", error);

        if (error.message === "Email not sent") {
            return res.status(500).json({ message: "Verification email failed to send. Please try again." });
        }

        res.status(500).json({ message: "Internal Server Error" });  
    }
}




// *-------------------
// login Logic
// *-------------------
const login=async(req,res)=>{
    try {
        //fetch the data basis on user model
        const {email,password}=req.body;

        //cheak user is already exist or not basis on email
        const userExist=await User.findOne({email})
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message:"Invalid Credential"});
        }

        //else user is exist so we compare the passward using bcrypt.compare() method
        //const user=await bcrypt.compare(password,userExist.password);
        const user=await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                msg:"Login successfull",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            });
        }else{
            res.status(401).json({messege:"Invalid email or password"});
        }
        
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}



// *-------------------
// User Logic-to get user data
// *-------------------

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      //res.status(200).json({msg:"hi user"})
      const userData = req.user;
      //console.log(userData);
      return res.status(200).json({ userData });
        
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

  //verify Email logic
  const verifyEmail=async(req,res)=>{
    try {
        const {code}=req.body;
        const user=await User.findOne({verificationCode:code}) 
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or Expired Code"})
        }
        //else 
        user.isVerified=true,
        user.verificationCode=undefined
        await user.save();
        return res.status(200).json({success:true,message:"Email Verified Successfully"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"})
        
    }
  }



module.exports={home,register,login,user,verifyEmail};