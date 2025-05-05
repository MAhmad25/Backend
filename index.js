const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.get("/", (req, res) => {
      res.send("Hello");
});
app.listen(process.env.PORT, () => console.log(`I am Alive at http://localhost:${process.env.PORT}/`));
