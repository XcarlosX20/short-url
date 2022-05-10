const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routes = require("./router");
//import custom environment
require("dotenv").config({ path:'variables.env' });
//read the form data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//conect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})
//views
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//static files
app.use(express.static(__dirname + '/public'));
app.use("/", routes());
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () =>{
console.log(`the server is running in ${port} at ${host} `);
});
//DEVELOPED BY CARLOS SIERRA