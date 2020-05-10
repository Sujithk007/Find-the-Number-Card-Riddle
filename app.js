//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let val=0;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/",function(req,res){
  res.render("home");
});

app.post("/cards",function(req,res){
  res.redirect("/cards");
});

app.get("/cards",function(req,res){
  res.render("cards");
});

app.get("/result",function(req,res){
  res.render("result",{total:val});
});

app.post("/result",function(req,res){
  val = req.body.totalvl;
  res.redirect("/result");
});

app.listen(3000,function(){
  console.log("Server has started Successfully");
});
