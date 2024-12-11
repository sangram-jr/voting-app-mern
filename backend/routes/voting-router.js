const express=require("express");
const router=express.Router();
const authMiddleware=require("../middlewares/auth-middleware");
const {voting,votingProcess}=require("../controllers/voting-controller");


router.route("/voting").get(voting);
router.route("/voting/:candidateID").post(authMiddleware, votingProcess);

module.exports=router;