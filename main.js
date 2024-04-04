import fs from "fs/promises";
import path from "node:path";

const myPath = "/home/rahulrawatr320/Desktop/file_organiser_using_node";

const files = await fs.readdir(myPath);


for (const file of files) {
  const filePath = path.join(myPath, file);
  const stats = await fs.stat(filePath)
  if (!stats.isFile()) {
    continue;
  }
  
  let fileExt = path.extname(file);
  const dirPath = path.join(myPath, fileExt.slice(1,));

  try {
    await fs.access(dirPath);
  } catch (err) {
    await fs.mkdir(dirPath);
  }


  let sourcePath = filePath;
  let destPath = path.join(dirPath, file);
  await fs.rename(sourcePath, destPath);
}

