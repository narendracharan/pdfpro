const express=require("express")
const path=require("path")
const app=express()
const bodyparser=require("body-parser")
const pdf=require("html-pdf")
var options={format:"A4"}
app.use(bodyparser.json())
require("./models/config")
const homeRouets=require('./routes/homeRoutes')

app.use("/",homeRouets)
const staticPath=path.join(__dirname,"./public")
//app.use(express.static(staticPath))
app.set("view engine","ejs")

// app.get("/",(req,res)=>{
//     res.render("app")
   
// })


// app.get("/home",(req,res)=>{
//     res.send("hello wolrd")
// })
app.listen(5000,()=>{
    console.log("Server is running port no:5000");
})