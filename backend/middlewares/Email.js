//import { transporter } from "./Email.confiq";
const Verification_Email_Template= require("./Email-template");
const transporter=require("./Email.confiq");

const SendVerificationCode=async(email,verificationCode)=>{
    try {
        const response = await transporter.sendMail({
            from: '"OnlineVoting 👻" <berakabita774@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify Your Email", // Subject line
            text: "Verify Your Email", // plain text body
            html:  Verification_Email_Template.replace("{verificationCode}",verificationCode), // html body
        });
        //console.log("Email send successfully",response);
        
    } catch (error) {
        console.error("Error during email send:", error);
        if (error.response) {
            console.error("SMTP Response:", error.response);
        }
        throw new Error("Email not sent");
        
    }
}
module.exports= {SendVerificationCode};