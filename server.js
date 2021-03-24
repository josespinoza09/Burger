const express = require("express");
const exhbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");

const PORT = process.env.PORT || 8000;

const app = express();

// serve static content for the app from public directory
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// handlebars run using main for content
app.engine("handlebars",
  exhbs({defaultLayout: "main",})
);

app.set("view engine", "handlebars");

// calls api routes
app.use(routes);

// Listener
app.listen(PORT, function () {
  console.log(`App listening on localhost: ${PORT}`);
});