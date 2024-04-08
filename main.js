// const express = require('express')
import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/todo.js";

const conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const todo = new Todo({
    // title: "title of todo",
    desc: "description of todo",
    isDone: false,
    days: 50
  });
  todo.save();
  res.send(`${todo.title}`);
});

app.get('/a', async (req, res) => {
  const todo = await Todo.findOne({});
  res.json({
    title: todo.title,
    description: todo.desc,
    isDone: todo.isDone,
    days: todo.days
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});