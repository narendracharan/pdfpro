const fs = require("fs");
const path = require("path");
const data = require("./data");
const puppetter=require("puppeteer")

const homePage = async (req, res) => {
  const browser=await puppetter.launch({headless: false})
  const page =await browser.newPage()
   const html = fs.readFileSync(
      path.join(__dirname, "../views/app.ejs"),
      "utf-8"
    );
  await page.setContent(html)
  
  const filename = Math.random() + "_docs" + ".pdf";

  await page.pdf({
    path:"01"+filename
  })
  await browser.close()
    res.render("app", { datas: data ,
    trading_Name:"Amazone",
    address_line1:"Inodre",
    city:"Inodre",
    country:"47802 M.P",
    email:"amazone23@gmail.com",
    number:"9116472181",
    serivice:"Amazone Market Credit Service.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  });
}

module.exports = {
  homePage
};
