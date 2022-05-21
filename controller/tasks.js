const getAllTasks = (req, res) => {
	res.send("load all tasks");
};

const createTask = (req, res) => {
	res.json(req.body);
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
