import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    author: { type: String, required: true, trim: true, unique: true },
    title: { type: String, required: true, trim: true, unique: true },

    url: { 
      type: String, 
      trim: true
    },

    description: {
      type: String,
      trim: true,
    },
    
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);
