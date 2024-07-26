const Tasks = require("../models/tasks");
const tasksData = require("./seed");

const seedTasks = async () => {
  try {
    await Tasks.deleteMany(); 
    await Tasks.insertMany(tasksData);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
  }
};

module.exports = seedTasks;
