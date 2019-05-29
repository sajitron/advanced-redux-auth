// starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose
	.connect('mongodb://localhost:27017/auth')
	.then(() => {
		console.log('App connected to mongodb');
	})
	.catch((err) => console.log('Mongo Error', err));

// instantiate express
const app = express();

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
