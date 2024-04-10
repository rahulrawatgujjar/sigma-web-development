// const express = require('express')
import express from "express";
import mongoose from "mongoose";
import { DummyData } from "./models/dummydata.js";
import { genDummyData } from "./utils/utlity.js";

const conn = await mongoose.connect("mongodb://localhost:27017/dummydata");

const app = express();
const host = '0.0.0.0';
const port = 3000;

app.use("/static",express.static("public"));
app.set("view engine","ejs");


app.get('/', async (req, res) => {
  const dummyData = await DummyData.find({});
  res.render("home", { dummyData: dummyData })
});

app.get('/generate', async (req, res) => {
  let dummyData = genDummyData();
  await DummyData.deleteMany({});
  await DummyData.insertMany(dummyData);
  res.json(dummyData);
});

app.listen(port,host, () => {
  console.log(`Example app listening on port ${port}`)
});


