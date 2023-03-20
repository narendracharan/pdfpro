const fs = require("fs");
const path = require("path");
const pdf = require("pdf-creator-node");
const { options } = require("../routes/homeRoutes");
const data = require("./data");

const homePage = async (req, res) => {
  res.render("app", { datas: data });
};

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
    pdf.create(document, options);
    const filepath = "http://localhost:5000/docs/" + filename;
    res.render("download", {
      path: filepath,
      document: document,
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
  generatePdf,
};
