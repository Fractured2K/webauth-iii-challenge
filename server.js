require('dotenv').config();
const express = require('express');

const middleware = require('./middleware/config');

const userController = require('./controllers/user');

const server = express();

server.use(middleware(server));

server.use('/api/', userController);

const port = process.env.PORT;
server.listen(port, () => console.log(`Server now listening on port ${port}`));
