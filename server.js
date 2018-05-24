var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var bars = require("express-handlebars");

app.engine("handlebars", bars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "friendFinder"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting " + err.stack);
    return;
  }
  console.log("SERVER CONNECTED AS " + connection.threadID);
});

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});