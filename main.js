const fs = require("fs");
// console.log(fs);


// // sync writing 
// console.log("start");
// fs.writeFileSync("rahul.txt","Rahul is a good boy.");
// console.log("ending");


// async writing 
console.log("start");
fs.writeFile("rahul2.txt","Rahul is a good boy.",()=>{
  console.log("done");
  fs.readFile("rahul2.txt",(error, data)=>{
    console.log(error, data.toString());
    // again
    fs.appendFile("rahul2.txt","\n\nRahul is a good boy.",()=>{
      console.log("done");
      fs.readFile("rahul2.txt",(error, data)=>{
        console.log(error, data.toString());
      })
    })
  })
})
console.log("ending");