const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  completed: {
    type: Boolean,
  },
  description: {
    type: String,
    require: true,
  },
});

const Tasks = mongoose.model("task", taskSchema);

module.exports = Tasks;
