const Candidate=require("../models/candidate-model");
const User=require("../models/user-model")


//to show the candidate in voting page
const voting=async(req,res)=>{
    try {
        // Find all candidates and select only the name and party fields, excluding _id
        const candidates = await Candidate.find({}, 'name party image _id');

        // Return the list of candidates
        res.status(200).json(candidates);
    } catch (error) {
        console.log(`voting: ${error}`);
        
    }
}
//when user click on the vote button in the voting page then vote is counted i
//actual voting process
const votingProcess=async(req,res)=>{
    const candidateID=req.params.candidateID; 
    const userId=req.user.id;
  
    

    try {
        //Find the candidate document with the specified candidateID
        const candidate=await Candidate.findById(candidateID);
        if(!candidate){
            return res.status(404).json({message:'candidate not found'});
        }
        //Find the user document with the specified userId
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
 

        //user can only vote once
        if(user.isVoted){
            candidate.voteCount=candidate.voteCount;
            return res.status(400).json({message:'You have already voted'});
        }
        else{
            //update the Candidate document to record the vote
            //in candidate model, there is votes array where userId of user is saved and voteCount++
            candidate.votes.push({user:userId});
            candidate.voteCount++;
            await candidate.save();

            //update the user document
            //in user model ,there is isVoted property,when vote is complete,isVoted is true
            user.isVoted=true;
            await user.save();

            res.status(200).json({message:'Vote recorded successfully'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
}
module.exports={voting,votingProcess};