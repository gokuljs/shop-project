var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/service", function(req, res) {
    res.render("service");
});


app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("port is starting at 3000");
    console.log("server started")
})