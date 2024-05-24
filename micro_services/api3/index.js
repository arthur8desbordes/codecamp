const express = require("express");

const app = express();

app.get("/", (req, res) => {
    user = {"nom":"arthur","prenom":"desbordes","adresse":"bli"}
    res.send(user)
  })

app.listen(3000)