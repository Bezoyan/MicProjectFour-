const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');

 const app = express();
 const con = mongoose.createConnection('127.0.0.1:27017/todo')
 const api_v1 = require('./controllers/api');

 app.use(express.static(__dirname + '/public'));
 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({'extended':'true'}));
 app.use(bodyParser.json());
 app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
 app.use(methodOverride());

 api_v1.initialize(app);

 app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

app.listen(3009);
     console.log("App listening on port 3009");
