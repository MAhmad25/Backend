import TodoModel from "../models/Todo.model.js";
export const getAllTodos = async (_, res) => {
      try {
            const response = await TodoModel.find();
            res.status(200).json({
                  success: true,
                  data: response,
                  message: "Array of all Todo",
                  total: response.length,
            });
      } catch (error) {
            console.log(error.message);
            res.status(500).json({
                  success: false,
                  data: "Unable to get All Posts",
                  message: error.message,
            });
      }
};

export const getTodoByID = async (req, res) => {
      try {
            const { id } = req.params;
            const response = await TodoModel.findById({ _id: id });
            res.status(200).json({
                  success: true,
                  data: response,
                  message: "Here is your post",
            });
      } catch (error) {
            console.log(error.message);
            res.status(500).json({
                  success: false,
                  data: "Unable to get Post by ID",
                  message: error.message,
            });
      }
};
