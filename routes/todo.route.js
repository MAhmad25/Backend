import express from "express";
// Importing the Specific Controller
import { createTodo } from "../controllers/createTodo.js";
const routes = express.Router();
//? Create TODO
routes.post("/new-todo", createTodo);
export default routes;
