const express = require("express");

const fetch = require("fetch")

const app = express();

app.get("/", (req, res) => {
  fetch("localhost:3025")
    res.send("hello world")
  })

app.listen(3000)