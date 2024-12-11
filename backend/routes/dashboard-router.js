const express=require("express");
const router=express.Router();
const dashboard=require("../controllers/dashborad-controller");

router.route("/dashboard").get(dashboard);

module.exports=router;