const express = require('express');
const path = require('path');

const indexRoute = require('./routes/route');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoute);

app.listen(3000);