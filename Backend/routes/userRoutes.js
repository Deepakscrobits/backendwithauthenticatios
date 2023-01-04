const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddelware");

//for registration
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/getuser", protect, getUser);

module.exports = router; 
