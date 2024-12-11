const mongoose=require('mongoose');
const serviceSchema=new mongoose.Schema({
    service:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    provider:{
        type:String,
        required:true,
    },

});

//define model
const Service=new mongoose.model("Service",serviceSchema);
module.exports=Service;