const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    //user: "berakabita774@gmail.com",
    //pass: "gtjp xubd mpiu iqfj",
    user: process.env.COMPANY_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

/*const SendEmail=async()=>{
    try {
        const info = await transporter.sendMail({
            from: '"OnlineVoting 👻" <berakabita774@gmail.com>', // sender address
            to: "sangrambera58@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log(info);
        
    } catch (error) {
        console.log(error);
        
    }
}

SendEmail()
*/

module.exports=transporter;
