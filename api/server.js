const express = require('express');
const path = require('path');
const server = express();
var bodyParser = require('body-parser');
 
server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(bodyParser.json());

// EXPRESS SPECIFIC STUFF
server.use('/static',express.static('static')); // serving static files
server.use(express.urlencoded());

//set the templates directory
server.set('views', path.join(__dirname, '../templates')); 

// settings to render html templates
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');


server.get('/', (req, res) => { 
    res.status(200).render('try.html')
});

module.exports = server;