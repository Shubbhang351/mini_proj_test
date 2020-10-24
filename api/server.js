const express = require('express');

const server = express();
 
server.use(express.json());


server.get('/', (req, res) => { 
    res.json({ message: 'hello world MINI PROJECT' });
});

module.exports = server;