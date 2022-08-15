const express = require("express");
const app = express();
const https = require('https');
const bp= require("body-parser");

app.use(bp.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var city_name = req.body.city;
  var url="https://api.openweathermap.org/data/2.5/weather?q="+city_name +"&appid=6ed2581ce7365d80cba1485675d397a5&units=metric";
  https.get(url, function(resp) {
    // console.log(resp.data);
    resp.on("data", function(data) {
      var prData = JSON.parse(data);
      res.write("Weather of "+city_name+" is "+prData.main.temp);
      res.send();
    });
  });
});














app.listen(3000, function(){
  console.log("Server started at port 3000...")
});
































//
// app.get("/", function(req, res) {
//   // res.send("Hamdan is a genius!");
//   var url= "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=129&appid=6ed2581ce7365d80cba1485675d397a5&units=metric#";
//   https.get(url, function(resp) {
//     console.log(resp.statusCode);
//
//     resp.on("data", function(data){
//       const weatherdata = JSON.parse(data);
//       console.log(weatherdata.weather[0].description);
//       res.write("<h1> Weather "+ weatherdata.main.temp+"</h1>");
//       res.write("<p> Description :"+ weatherdata.weather[0].description+"</p>");
//       // res.write("<img src="+ +" alt="+clouds+">");
//       res.send();
//     });
//   });
// });
//
//
//
// app.listen(3000, function() {
//   console.log("Weather API started on port: 3000");
// });
