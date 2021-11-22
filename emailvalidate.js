var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());

app.post("/", (req, res) => {
  let emailId = req.body.email;
  if (isEmailValid(emailId)) {
    res.send("Valid Email id");
  } else {
    res.send("Invalid Email id");
  }
});
var emailRegex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

isEmailValid = (email) => {
  if (!email) return false;

  if (email.length > 254) return false;

  var valid = emailRegex.test(email);
  if (!valid) return false;

  // Further checking of some things regex can't handle
  var parts = email.split("@");
  if (parts[0].length > 64) return false;

  var domainParts = parts[1].split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  return true;
};
app.listen(3000);
console.log("server started");
