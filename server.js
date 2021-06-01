const http = require("http");
const express = require("express");
const app = express();
app.use(express.static("./"));


let json = require("./vehicle_data.json");

app.get("/", (req, res)=> {
  res.sendFile("index.html");
});

app.get("/vehicle_data.json", (req, res)=> {
  res.sendFile("vehicle_data.json");
});

app.listen(3000, ()=>{
  console.log("Running on port 3000");
});
