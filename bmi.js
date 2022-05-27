const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {
    var w = Number(req.body.wt);
    var h = Number(req.body.ht);
    var bmi = w / (h * h);
    res.send("Your BMI is" + bmi);
});

app.listen("3000", function () {
    console.log("server on at port 3000");
});
