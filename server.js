const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Route files
const bootcamps = require('./routes/bootcamps');
const auth = require('./routes/auth');

// load env vars
dotenv.config({
	path: './config/config.env',
});

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV == 'development') {
	app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect MongoDB then listen for requests

(async () => {
	await connectDB();
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.blue 
		)
	);
})();
