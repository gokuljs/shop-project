var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));
//app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.listen(3000, function() {
    console.log("port is starting at 3000");
    console.log("server started")
})