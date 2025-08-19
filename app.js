import express from "express";
const app = express();
import main from "./config/db.js";
import todoRoute from "./routes/todo.route.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/v1", todoRoute);
app.get("/", (req, res) => {
      res.send("Hello");
});
app.listen(PORT, () => console.log(`I am Alive at http://localhost:${process.env.PORT}/`));
