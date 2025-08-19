import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true,
            max: 50,
      },
      description: {
            type: String,
            required: true,
            max: 100,
      },
      createdAt: {
            type: Date,
            default: Date.now(),
      },
      updatedAt: {
            type: Date,
            default: Date.now(),
      },
});
export default mongoose.model("Todo", todoSchema);
