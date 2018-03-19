const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const _public = path.join(__dirname, '../public');

app.use(express.static(_public));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/test', (req, res) => {
  res.status(200).send('You have sent a request successfully');
});


app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
});

module.exports = app;