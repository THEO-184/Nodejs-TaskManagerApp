const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
	name: {
		type: String,
		required: [true, "name must be provided"],
		trim: true,
		maxlength: [20, "name cannot be more than 20 characters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = model("Task", taskSchema);
