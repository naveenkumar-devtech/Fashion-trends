const express = require("express")
const rootcontroller = require("../controllers/controller")
const router = express.Router()

router.get("/",rootcontroller)

module.exports = router