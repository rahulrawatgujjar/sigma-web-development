const express = require('express');
const blog = require("./routes/blog");
const fs = require("fs/promises");

const app = express();
const port = 3000;


app.use("/blog",blog);
app.use(express.static("public"))

// Middleware 1
app.use((req, res, next)=>{
  req.rahul = "I am Rahul Rawat.";
  fs.appendFile("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

// Middleware 2
app.use((req, res, next)=>{
  console.log("m2");
  next();
});



app.get('/', (req, res) => {
  res.send('hello world,' + ` ${req.rahul}`);
});

app.get("/about", (req, res) =>{
  res.send("this is about page");
});

app.listen(port, ()=>{
  console.log(`Sever listening at ${port}`);
});

// type of middleware
// 1. application level: ( whole application)
// 2. Router level: ( specific to Router ( blueprint in python))
// 3. Error handling middleware: ( to handles errors )
// 4. Third party : ( to add new functionality )