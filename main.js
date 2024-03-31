const express = require('express')
const app = express()
const port = 3000

// app.get or app.post app.put or app.delelte(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res)=>{
  res.send("This is about page.")
  // query in routes
  console.log(req.query); // it will print a query object 
})

app.get("/contact", (req, res)=>{
  res.send("This is contact page.")
})

app.get("/blog/:slug/:hello", (req, res)=>{
  res.send(`This is ${req.params.slug} - ${req.params.hello}`);
  // routing parameters
  console.log(req.params);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})