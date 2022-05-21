const mongoose = require("mongoose");

const connectionString =
	"mongodb+srv://Theo:effa8KISSI7@nodeexpressproject.eemhb.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
	return mongoose.connect(connectionString, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
};

module.exports = connectDB;
