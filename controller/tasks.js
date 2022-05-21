const Task = require("../model/Tasks");
const asyncWrapper = require("../middleware/async-wrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json({ success: true, total: tasks.length, tasks });
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ success: true, task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const singleTask = await Task.findOne({ _id: taskID });
	if (!singleTask) {
		return res
			.status(404)
			.json({ success: false, msg: `No task with id : ${taskID}` });
	}
	res.status(200).json({ success: true, task: singleTask });
});

const updateSingleTasks = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const query = { _id: taskID };
	const task = await Task.findOneAndUpdate(query, req.body, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return res
			.status(404)
			.json({ success: false, msg: `No task with id ${taskID}` });
	}
	res.status(200).json({ success: true, task });
});

const deteleSingleTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndDelete({ _id: taskID });
	res.status(200).json({
		success: true,
		msg: `task with id: ${taskID} successfully deleted`,
	});
	if (!task) {
		return res.status(404).json({ msg: `No task with id: ${taskID}` });
	}
});

module.exports = {
	getAllTasks,
	createTask,
	getSingleTask,
	updateSingleTasks,
	deteleSingleTask,
};
