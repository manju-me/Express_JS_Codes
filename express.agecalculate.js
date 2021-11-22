var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.post("/", (req, res) => {
  let age = req.body.dateOfBirth;
  let a = age.toString().split("/");
  var now = new Date();
  res.send((now.getFullYear() - parseInt(a[2])).toString());
});

app.listen(3000);
console.log("server started");
