
const express = require("express");
const router = express.Router();
const usercontroller = require('../cotrollers/user.js');

router.get("/",usercontroller.getAllUsers);
router.post("/signup",usercontroller.createNewUser);
router.post("/login",usercontroller.loginUser);
router.delete("/:id",usercontroller.deleteUserById);

module.exports = router