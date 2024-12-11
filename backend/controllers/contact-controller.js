const Contact = require("../models/contact-model");

const contactForm=async(req,res)=>{
    try {
        //fetch all data that user put into contact Form
        const responce=req.body;
        //all data push into Contact collection or model using create method
        await Contact.create(responce);
        return res.status(200).json({message:"message sent successfully"});
    } catch (error) {
        return res.status(500).json({message:"message not delivered"});
    }
    
};
module.exports=contactForm;