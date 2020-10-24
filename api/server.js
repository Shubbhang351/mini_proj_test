const express = require('express');
const path = require('path');
const server = express();
 
server.use(express.json());

// EXPRESS SPECIFIC STUFF
server.use('/static',express.static('static')); // serving static files
server.use(express.urlencoded());

server.set('views', path.join(__dirname, 'templates')); //set the templates directory


server.get('/', (req, res) => { 
    res.json({ message: 'hello world MINI PROJECT' });
});

module.exports = server;