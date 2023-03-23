const nodemailer=require("nodemailer")

var tarnsporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"narendracharan25753@gmail.com",
        pass:"wlrvoxredempejek"
    }
})

module.exports={tarnsporter}