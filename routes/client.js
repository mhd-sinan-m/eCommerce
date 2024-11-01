const express = require("express");
const router = express.Router()
const authcontroller = require("../controllers/authcontroller")


router.get("/", authcontroller.home)
router.get("/signup", authcontroller.signupGet)
router.post("/signup", authcontroller.signupPost)
router.get("/signin", authcontroller.signinGet)
router.post("/signin", authcontroller.signinPost)

module.exports = router