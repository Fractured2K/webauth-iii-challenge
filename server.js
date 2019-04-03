require('dotenv').config();
const express = require('express');

const middleware = require('./middleware/config');

// controllers
const userController = require('./controllers/user');

const server = express();

// middleware
server.use(middleware(server));

// route handlers
server.use('/api/', userController);

const port = process.env.PORT;
server.listen(port, () => console.log(`Server now listening on port ${port}`));
