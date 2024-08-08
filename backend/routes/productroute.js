const express = require("express")
const productcontroller = require("../controllers/products/getproductcontroller")
const { route } = require("./rootroute")
const getproductcontroller = require("../controllers/products/getproductcontroller")
const router = express.Router()

router.get("/",productcontroller)
router.get("/category/:category",getproductcontroller)
router.get("/subcategory/:subcategory",getproductcontroller)
router.get("/name/:name",getproductcontroller)
router.get("/id/:id",getproductcontroller)
router.get("/random",getproductcontroller)
router.get("/top-rated",getproductcontroller)
router.get("/lowtohigh",getproductcontroller)
router.get("/hightolow",getproductcontroller)







module.exports = router