const express = require("express");
const app = express();
const port = 3000;


app.use(express.static("public"))


app.get("/",(req, res)=>{
  console.log("Hey its a get request.");
  res.send("Response for get request.");
});


app.post("/",(req, res)=>{
  console.log("Hey its a post request.");
  res.send("Response for a post request.");
});

app.put("/",(req, res)=>{
  console.log("Hey its a put request.");
  res.send("Response for a put request");
});

app.listen(port, ()=>{
  console.log(`App listening on port ${port}`);
});


