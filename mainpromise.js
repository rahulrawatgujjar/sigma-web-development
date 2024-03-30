import fs from "fs/promises";

let a = await fs.readFile("rahul2.txt");

let b = await fs.appendFile("rahul2.txt","\nHello my name is Rahul Rawat.");

let c = await fs.readFile("rahul2.txt");

console.log(a.toString(),"\n",c.toString());

