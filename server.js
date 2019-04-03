require('dotenv').config();
const express = require('express');

const server = express();

const port = process.env.PORT;
server.listen(port, () => console.log(`Server now listening on port ${port}`));
