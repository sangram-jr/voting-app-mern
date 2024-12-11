const Candidate = require("../models/candidate-model");

const dashboard=async(req,res)=>{
    try {
        //Find all candidate and sort them by voteCount in decending order
        const candidate=await Candidate.find().sort({voteCount:'desc'})

        //Map the candidate to only return their name and voteCount
        const voteRecord=candidate.map((data)=>{
            return{
                name:data.name,
                party:data.party,
                count:data.voteCount
            }
        });
        return res.status(200).json(voteRecord);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
}
module.exports=dashboard;