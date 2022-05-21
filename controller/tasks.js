const Task = require("../model/Tasks");

const getAllTasks = (req, res) => {
	res.send("load all tasks");
};

const createTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
};

const getSingleTask = (req, res) => {
	res.json({ id: req.params.id });
};

const updateSingleTasks = (req, res) => {
	res.send("update single task");
};

const deteleSingleTask = (req, res) => {
	res.send("delete single tasks");
};

module.exports = {
	getAllTasks,
	createTask,
	getSingleTask,
	updateSingleTasks,
	deteleSingleTask,
};
