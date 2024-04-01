const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
  res.send("Home page for blog.");
});

router.get("/about",(req, res)=>{
  res.send("About page for blog.");
});

router.get("/blogpost/:slug",(req, res)=>{
  res.send(`Fetch blogpost for ${req.params.slug}.`);
});

module.exports= router;
