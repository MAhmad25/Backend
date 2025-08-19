import express from "express";
// Importing the Specific Controller
import { createTodo } from "../controllers/createTodo.js";
import { getAllTodos, getTodoByID } from "../controllers/getTodos.js";
const routes = express.Router();
//? Defining the Routes
routes.post("/new-todo", createTodo);
routes.get("/all-todo", getAllTodos);
routes.get("/all-todo/:id", getTodoByID);
export default routes;
