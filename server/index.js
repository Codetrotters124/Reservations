const express = require('express');
// const db = require('../database/index.js');
const controller = require('./controller');
const path = require('path');
//middleware
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('client/dist'));
// app.use('/:id', express.static(path.join(__dirname, 'client/dist')));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/:id', controller.bookings.get);

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
