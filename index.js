// const express = require('express')
import express from "express"

// require('dotenv').config()
import "dotenv/config"

// console.log(process.env) // remove this after you've confirmed it is working
console.log(process.env.PASSWORD);

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})