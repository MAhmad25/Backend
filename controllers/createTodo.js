import TodoModel from "../models/Todo.model.js";
export const createTodo = async (req, res) => {
      try {
            const { title, description } = req.body;
            const response = await TodoModel.create({ title, description });
            res.status(201).json({
                  success: true,
                  data: response,
                  message: "Entry created in Database",
            });
      } catch (error) {
            console.log(error.message);
            res.status(500).json({
                  success: false,
                  data: "Internal Server Error",
                  message: error.message,
            });
      }
};
