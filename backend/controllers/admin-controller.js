const User=require("../models/user-model");
const Contact=require("../models/contact-model");
const Candidate=require("../models/candidate-model");





/*** *
 // getAllUsers logic 
*****/
const getAllUsers=async(req,res)=>{
    try {
        //fetch all the user data from User model
        //const responce=await User.find();

        //fetch all the user data form User model excluding password(password nehi chahiye)
        const users=await User.find({},{password:0});
        //console.log("ALL users:",users);
        if(!users || users.length===0){
            return res.status(404).json({message:"No User Found"});
        }
        //else return user data as a response
        return res.status(200).json(users);

    } catch (error) {
        next(error);
    }    
};



/*** *
 // getAllContacts logic 
*****/

const getAllContacts=async(req,res)=>{
    try {
        //fetch all the contact data from Contact model
        const contacts=await Contact.find();

        console.log("ALL contacts:",contacts);
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No Contacts Found"});
        }
        //else return user data as a response
        return res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }    
};



/*** *
 // Delete the user logic
*****/
const deleteUserById=async(req,res)=>{
    try {
        //fetch the id that will be delete from the route
        const id=req.params.id;
        //delete the user from the User collection or User model
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"user deleted successfully"});

    } catch (error) {
        next(error);
    }    
};



/*** *
 // Delete the contact logic
*****/
const deleteContactById=async(req,res)=>{
    try {
        //fetch the id that will be delete from the route
        const id=req.params.id;
        // delete from the Contact collection or Contact model
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"contact deleted successfully"});

    } catch (error) {
        next(error);
    }    
};




/*** *
 // Get the user by id
*****/
const getUserById=async(req,res)=>{
    try {
        //fetch the id that pass into route 
        const id=req.params.id;
        //Find the id from the collection or user model
        const data=await User.findOne({_id:id},{password:0});
        return res.status(200).json(data);

    } catch (error) {
        next(error);
    }    
};



/*** *
 // Update the user by id
*****/
const updateUserById=async(req,res)=>{
    try {
        //fetch the id that pass into route 
        const id=req.params.id;
        //fetch the data that will be update
        const updatedUserData=req.body;
        //update the user
        const updatedData=await User.updateOne({_id:id},{$set:updatedUserData})
        return res.status(200).json(updatedData);

    } catch (error) {
        next(error);
    }    
};




/*** *
 // ADD All Candidates logic 
*****/
const addAllCandidates=async(req,res)=>{
    /*try {
        const responce=req.body;
        //all data push into Contact collection or model using create method
        await Candidate.create(responce);
        return res.status(200).json({message:"candidate added successfully"});
    } catch (error) {
        next(error);
    }*/
    let image_filename=`${req.file.filename}`

    const newCandidate=new Candidate({
        name:req.body.name,
        party:req.body.party,
        age:req.body.age,
        image:image_filename
    })
    try {
        await newCandidate.save();
        res.json({success:true,message:"Candidate Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


/*** *
 // getAllCandidate logic 
*****/
const getAllCandidates=async(req,res)=>{
    try {
        //fetch all the user data from User model
        //const responce=await User.find();

        //fetch all the user data form User model excluding password(password nehi chahiye)
        const candidates=await Candidate.find();
        console.log("ALL Candidates:",candidates);
        if(!candidates || candidates.length===0){
            return res.status(404).json({message:"No Candidate Found"});
        }
        //else return user data as a response
        return res.status(200).json(candidates);

    } catch (error) {
        next(error);
    }    
};


/*** *
 // Delete the candidate logic
*****/
const deleteCandidateById=async(req,res)=>{
    try {
        //fetch the id that will be delete from the route
        const id=req.params.id;
        //delete the user from the User collection or User model
        await Candidate.deleteOne({_id:id});
        return res.status(200).json({message:"Candidate deleted successfully"});

    } catch (error) {
        next(error);
    }    
};


module.exports={getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById,addAllCandidates,getAllCandidates,deleteCandidateById};