const express = require("express");
const router = express.Router();
const {
	getAllTasks,
	createTask,
	getSingleTask,
	updateSingleTasks,
	deteleSingleTask,
} = require("../controller/tasks");

// get all tasks
router.get("/", getAllTasks);

// create a new task
router.post("/", createTask);

// get single task

router.get("/:id", getSingleTask);

// update single task
router.patch("/:id", updateSingleTasks);
// delete single task
router.delete("/:id", deteleSingleTask);

module.exports = router;
