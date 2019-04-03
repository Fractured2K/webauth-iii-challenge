require('dotenv').config();
const express = require('express');

//  Controllers
const userController = require('./controllers/user');

const server = express();

// Route handling
server.use('/api/', userController);

const port = process.env.PORT;
server.listen(port, () => console.log(`Server now listening on port ${port}`));
