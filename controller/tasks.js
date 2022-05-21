const Task = require("../model/Tasks");

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error.errors });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error.errors });
	}
};

const getSingleTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const singleTask = await Task.findOne({ _id: taskID });
		if (!singleTask) {
			return res.status(404).json({ msg: `No task with id : ${taskID}` });
		}
		res.status(200).json({ task: singleTask });
	} catch (error) {
		res.status(500).json({ msg: error.errors });
	}
};

const updateSingleTasks = async (req, res) => {
	try {
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
		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error.errors });
	}
};

const deteleSingleTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskID });
		res.status(200).json({
			success: true,
			msg: `task with id: ${taskID} successfully deleted`,
		});
		if (!task) {
			return res.status(404).json({ msg: `No task with id: ${taskID}` });
		}
	} catch (error) {
		res.status(500).json({ msg: error.errors });
	}
};

module.exports = {
	getAllTasks,
	createTask,
	getSingleTask,
	updateSingleTasks,
	deteleSingleTask,
};
