"use server"
import fs from "fs/promises";

export const submitAction = async (e) => {
  console.log(e);
  console.log(`Name: ${e.get("name")}\nAddress: ${e.get("address")}`);
  let a = await fs.writeFile("rahul.txt", `Name: ${e.get("name")}\n Address: ${e.get("address")}`);
}