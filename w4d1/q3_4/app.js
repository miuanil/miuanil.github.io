const express = require("express");
const path = require("path");
const session = require('express-session');
const app = express();
const indexRoute = require('./routes/route');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing'
}));

app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRoute);


app.listen(3000);