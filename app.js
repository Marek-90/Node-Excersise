const express = require("express");
const port = 3330;

const genereteTitle = () => {
  return "Node JS";
};

const app = express();
app.set("view engine", "hbs");

const title = genereteTitle();

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: title,
    pageBody: "Hello Node",
  });
});

app.listen(port);
