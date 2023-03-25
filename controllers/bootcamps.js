// 	@desc 		Get all bootcamps
// 	@route		GET /api/v1/bootcamps
// 	@access		Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: 'Display all bootcamps',
	});
};

// 	@desc 		Get single bootcamps
// 	@route		GET /api/v1/bootcamps/:id
// 	@access		Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: `Display bootcamp with id: ${req.params.id}`,
	});
};

// 	@desc 		Create new bootcamp
// 	@route		POST /api/v1/bootcamps
// 	@access		Private
exports.createBootcamp = (req, res, next) => {
	res.status(201).json({
		success: true,
		message: 'Create new bootcamp',
	});
};

// 	@desc 		Update bootcamp
// 	@route		GET /api/v1/bootcamps/:id
// 	@access		Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: `Update bootcamp with id: ${req.params.id}`,
	});
};

// 	@desc 		Delete bootcamp
// 	@route		DELETE /api/v1/bootcamps/:id
// 	@access		Private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: `Delete bootcamp with id: ${req.params.id}`,
	});
};
