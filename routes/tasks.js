const express = require("express");
const router = express.Router();
// const { tasks } = require("../data");
const Tasks = require("../models/tasks");
//GET ALL
// router.get("/", (req, res) => {
//   if (req.query?.completed !== undefined) {
//     const completed = req.query?.completed === "true";
//     const filteredTasks = tasks.filter((t) => t.completed === completed);
//     res.json(filteredTasks);
//     return;
//   }

//   res.json(tasks);
// });

router.get("/", async (req, res) => {
  try {
    let tasks;

    if (req.query?.completed !== undefined) {
      const completed = req.query.completed === "true";
      tasks = await Tasks.find({ completed });
    } else {
      tasks = await Tasks.find();
    }

    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
//CREATE

// router.post("/", (req, res) => {
//   if (req.body.description) {
//     const task = {
//       task_id: tasks[tasks.length - 1].task_id + 1,
//       description: req.body.description,
//       completed: false,
//     };
//     tasks.push(task);
//     res.json(task);
//   } else {
//     res.json({ error: "Insufficient Data while adding" });
//   }
// });

router.post("/", async (req, res) => {
  try {
    if (req.body.description) {
      const newTask = new Tasks({
        description: req.body.description,
        completed: false,
      });

      const saveTask = await newTask.save();
      res.json(saveTask);
    } else {
      res.status(400).json({ error: "Insufficient Data while adding" });
    }
  } catch (error) {
    console.error({
      error,
    });
  }
});

//EDIT

router.patch("/:id", async (req, res) => {
  try {
    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(updatedTask);

    res.json(updatedTask);
  } catch (error) {
    console.log(error);
  }
});

// router.patch("/:id", (req, res, next) => {
//   const task = Tasks.find((task, i) => {
//     if (task.task_id === +req.params.id) {
//       for (const key in req.body) {
//         if (key === "task_id") {
//           continue;
//         }

//         if (req.body[key] !== undefined) {
//           tasks[i][key] = req.body[key];
//         }
//       }
//       return true;
//     }
//   });
//   if (task) res.json(task);
//   else next();
// });

//DELETE
router.delete("/removecompleted", async (req, res) => {
  try {
    const deletedTask = await Tasks.deleteMany({
      completed: true,
      // completed: { $eq: true },
    });
    console.log(deletedTask);

    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    res.json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;

    const deletedTask = await Tasks.findOneAndDelete({ _id: taskId });

    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    res.json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// router.delete("/:id", (req, res, next) => {
//   const task = Tasks.find((task, i) => {
//     if (task.task_id === +req.params.id) {
//       tasks.splice(i, 1);
//       return true;
//     }
//   });
//   if (task) res.json(task);
//   else next();
// });

// router.use((req, res) => {
//   res.status(404);
//   res.json({ error: "Resource not found" });
// });

module.exports = router;
