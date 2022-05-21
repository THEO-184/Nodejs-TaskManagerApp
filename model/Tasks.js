const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
	name: String,
	completed: Boolean,
});

module.exports = model("Task", taskSchema);
