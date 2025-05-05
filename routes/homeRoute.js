const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
      res.status(200).send("Hello idiot");
});
route.post("/edit", (req, res) => {
      res.status(404).send("Successfully Edited");
});

module.exports = route;