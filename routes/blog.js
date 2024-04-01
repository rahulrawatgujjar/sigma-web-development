const express = require("express");
const router = express.Router();


// this middleware is specific to this router (ie It work for all routes in this blog.js file)
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});


router.get("/",(req, res)=>{
  res.send("Blog HomePage");
});

router.get("/about", (req, res)=>{
  res. send("Blog AboutPage");
});

module.exports = router;