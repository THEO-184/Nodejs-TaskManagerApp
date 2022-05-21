const errorHandlerMiddleWare = (err, req, res, next) => {
	res.status(500).json({ err });
};

module.exports = errorHandlerMiddleWare;
