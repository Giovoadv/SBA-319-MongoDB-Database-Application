// const mongoose = require("mongoose");
// const taskSchema = new mongoose.Schema({
//   task_id: {
//     type: Number,
//     require: true,
//   },
//   completed: {
//     type: Boolean,
//   },
//   description: {
//     type: String,
//     require: true,
//   },
// });

// const tasks = [
//   {
//     task_id: 1,
//     completed: true,
//     description:
//       "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
//   },
//   {
//     task_id: 2,
//     completed: true,
//     description:
//       "ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
//   },
//   {
//     task_id: 3,
//     completed: false,
//     description:
//       "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
//   },
// ];

// const Tasks = mongoose.model("task", taskSchema);

module.exports = { tasks };

// module.exports = Tasks;
