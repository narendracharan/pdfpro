const fs = require("fs");
const path = require("path");
const pdf = require("pdf-creator-node");
const data = require("./data");

const homePage = async (req, res) => {
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

const generatePdf = async (req, res) => {
  try {
    const html = fs.readFileSync(
      path.join(__dirname, "../views/app.ejs"),
      "utf-8"
    );
    const filename = Math.random() + "_docs" + ".pdf";
    const document = {
      html: html,
      path: "./docs/" + filename,
    };
    let options={
      format:"Letter"
    }
    pdf.create(document,options);
    const filepath = "http://localhost:5000/docs/" + filename;
    res.render("download", {
      path: filepath,
    });
  } catch (err) {
    res.status(500).json({  
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = {
  homePage,
  generatePdf
};
