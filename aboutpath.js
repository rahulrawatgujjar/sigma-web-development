import path from "path"

let myPath="/home/rahulrawatr320/Desktop/learn_flask/sigma_web_development/rahul.txt";

// to get extensioin name
console.log(path.extname(myPath));

// to get directory name
console.log(path.dirname(myPath));

// to get file name
console.log(path.basename(myPath));

// to join path (may be of different type)
console.log(path.join("/home/rahulrawatr320/Desktop","learn flask/example.txt"));