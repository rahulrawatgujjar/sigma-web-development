const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");


const app = express();
const port = 3000;


app.use(express.static("public"));
app.use("/blog",blog);
app.use("/shop",shop);


app.get("/",(req, res)=>{
  console.log("Hey its a get request.");
  res.send("Response for get request.");
}).post("/",(req, res)=>{
  console.log("Hey its a post request.");
  res.send("Response for a post request.");
}).put("/",(req, res)=>{
  console.log("Hey its a put request.");
  res.send("Response for a put request");
});


app.get("/index",(req, res)=>{
  console.log("Hey its index");
  res.sendFile("templates/index.html", {root: __dirname});
});


app.get("/api",(req, res)=>{
  console.log("Hey its api");
  res.json({
    a: 1,
    b: 2,
    c: 3,
    d: ["rahul", "rawat"]
  });
});


app.listen(port, ()=>{
  console.log(`App listening on port ${port}`);
});