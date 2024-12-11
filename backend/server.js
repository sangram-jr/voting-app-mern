require("dotenv").config();
const express=require("express");
const app=express();
const authroute=require("./routes/auth-router");
const contactRoute=require("./routes/contact-router")
const votingRoute=require('./routes/voting-router')
const DashboardRoute=require('./routes/dashboard-router')
const adminRouter=require("./routes/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors=require("cors");


//handle cors 
const corsOptions={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions))


//This middware is responsible for parsing json data from request;
app.use(express.json());


//for registation and login
app.use("/api/auth",authroute);
//for contact
app.use("/api/form",contactRoute);
//for voting
app.use("/api/data",votingRoute);
//for dashboard route
app.use("/api/count",DashboardRoute);



//defin admin  route
app.use("/api/admin",adminRouter);
//if i insert any image in uploads folder ,we access that file using  /image/filename
app.use("/image",express.static('uploads'));




//use error middleware
app.use(errorMiddleware);



const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT}`);
        
    });
});

