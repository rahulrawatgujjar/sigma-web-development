const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
  res.send("Blog HomePage");
});

router.get("/about", (req, res)=>{
  res. send("Blog AboutPage");
});

module.exports = router;