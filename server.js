var express = require("express");
var path = require("path");

var app = express();
app.listen(8080);

app.use(express.static(path.join(__dirname, "app/")));

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "app/index.html"));
});