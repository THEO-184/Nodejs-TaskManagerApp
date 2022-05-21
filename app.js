const connectDB = require("./db/connect");
const express = require("express");
require("dotenv").config();
const app = express();
const tasksRouter = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/errorHandler");

// serve static files
app.use(express.static("./public"));
// middleware
app.use(express.json());
// routes
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`server running on port ${port}`);
		});
	} catch (error) {}
};

start();
