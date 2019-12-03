const express = require('express');
// const db = require('../database/index.js');

const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('client/dist'));

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});