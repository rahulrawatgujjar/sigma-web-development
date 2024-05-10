// const express = require('express')
import express from "express"
import "dotenv/config"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { Password } from "./models/passwords.js"
import cors from "cors"


const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(cors())


await mongoose.connect(`${process.env.MONGO_URI}/password-manager`);


app.get('/', async (req, res) => {
  const passwords = await Password.find({});
  res.json(passwords);
})

app.post('/', async (req, res) => {
  const password = req.body;
  const result= await Password.insertMany([password])
  res.send({success: true,result});
})

app.delete('/', async (req, res) => {
  const {id}= req.body
  const result= await Password.deleteOne({id});
  res.send({success: true,result});
})



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})