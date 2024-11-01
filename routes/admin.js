const express = require("express");
const router = express.Router()
const admincontroller = require("../controllers/admincontroller")

router.get("/", admincontroller.dashboardGet)

module.exports = router