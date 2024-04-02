const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  let siteName= "Ignite";
  let searchWord= "Search Now";
  let items= ["rahul", "rawat", "gujjar"];
  res.render("index",{siteName: siteName, searchWord: searchWord, items});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})