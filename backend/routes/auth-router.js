const express=require("express");
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {signupSchema,loginSchema} = require("../validators/auth-validator");
const authMiddleware=require('../middlewares/auth-middleware')
const router=express.Router();

/*
router.get("/",(req,res)=>{
    res.status(200).send("Hello world");
})
*/


/*
router.route("/").get((req,res)=>{
    res.status(200).send("Hello world 2");
});

*/

//home route
router.route("/").get(authController.home);


/*
router.route("/register").get((req,res)=>{
    res.status(200).send("Welcome to registation page");
});
*/

//register route
router.route("/register").post(validate(signupSchema), authController.register);
//router.route("/register").post( authController.register);

//verify email
router.route("/verifyEmail").post(authController.verifyEmail);

//login route
router.route("/login").post(validate(loginSchema), authController.login);

//user route- to get user data
router.route("/user").get(authMiddleware, authController.user);




module.exports=router;