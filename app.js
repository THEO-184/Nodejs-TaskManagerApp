const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");

// middleware
app.use(express.json());
// routes
app.use("/api/v1/tasks", tasksRouter);

const port = 3000;

const start = async () => {
	try {
		await connectDB();
		app.listen(port, () => {
			console.log(`server running on port ${port}`);
		});
	} catch (error) {}
};

start();
