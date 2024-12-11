const express=require("express");
const {getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById,addAllCandidates,getAllCandidates,deleteCandidateById} = require("../controllers/admin-controller");
const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware=require("../middlewares/admin-middleware");
const router=express.Router();
const multer=require("multer");


//get all users and contacts
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware,getAllContacts);




//for delete the users in admin panel
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware,deleteUserById);

//find one user by id 
router.route("/users/:id").get(authMiddleware, adminMiddleware,getUserById);
//update the user by id 
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware,updateUserById);

//for delete the contact in admin panel
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware,deleteContactById);



//get all candidates
router.route("/candidates").get(authMiddleware, adminMiddleware, getAllCandidates);
//delete the candidate
router.route("/candidates/delete/:id").delete(authMiddleware, adminMiddleware,deleteCandidateById);



//add the candidate

//image storage Engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

//foodRouter.post("/add",upload.single("image"),addFood)
router.route("/candidates/add").post(authMiddleware, adminMiddleware, upload.single("image"), addAllCandidates);






module.exports=router;