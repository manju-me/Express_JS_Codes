var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.post("/", (req, res) => {
  let main = req.body.main.toString();
  let sub = req.body.sub;
  if (main.includes(sub)) {
    res.send("yes both string are substring");
  } else {
    res.send("no both string are not a substring");
  }
});

app.listen(3000);
console.log("server started");
