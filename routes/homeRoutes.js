const express=require("express")
const router=express.Router()
const homeControllers=require("../controllers/invoiseControllers")

router.get("/home",homeControllers.homePage)

module.exports=router