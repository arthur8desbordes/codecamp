const express = require("express");

const app = express();

app.get("/", (req, res) => {
  product = {"numero":1,"nom":"crousitpoulet","description":"miam","prix":20}
  res.send(product)
  })

app.listen(3000)