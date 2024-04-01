const express = require('express');
const blog = require("./routes/blog");

const app = express();
const port = 3000;


app.use("/blog",blog);
app.use(express.static("public"))

// Middleware 1
app.use((req, res, next)=>{
  console.log("m1");
  next();
});

// Middleware 2
app.use((req, res, next)=>{
  console.log("m2");
  next();
});



app.get('/', (req, res) => {
  res.send('hello world')
});

app.get("/about", (req, res) =>{
  res.send("this is about page");
});

app.listen(port, ()=>{
  console.log(`Sever listening at ${port}`);
});

