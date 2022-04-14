"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var TaskSchema = (0, _mongoose.Schema)({
  author: { type: String, required: true, trim: true, unique: true },
  title: { type: String, required: true, trim: true, unique: true },
  url: { type: String, trim: true},
  description: {
    type: String,
    trim: true
  },
 
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Task", TaskSchema);

exports["default"] = _default;