const express = require('express');
const path = require('path');
const rootDir = require('./util/path');
const session = require("express-session");

const date = new Date();
const hour = date.getHours();
let cssFile = (hour > 6 && hour < 18) ? 'day.css' : 'night.css';

const app = express();

app.use('/css/style.css', express.static(path.join(rootDir, 'public','css', cssFile)));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    "secret": "salt for cookie",
    "resave": false,
    "saveUninitialized": false,
}));


app.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'form.html'));
});


app.post('/result', (req, res, next) => {
    let name = (req.body.name === '' || !req.body.name) ? "person" : req.body.name;
    let age = (req.body.age === '' || !req.body.age) ? "20" : req.body.age;

    // res.redirect(303, `/output?name=${name}&age=${age}`); // Passing with parameters.

    // Using session.
    req.session['name'] = name;
    req.session['age'] = age;

    res.redirect(303, '/output');
});

app.get('/output', (req, res, next) => {
    // res.send(`Welcome ${req.query.name}. Your age is ${req.query.age}`); // Using query.
    res.send(`Welcome ${req.session.name}. Your age is ${req.session.age}`); // Using session.
});

app.listen(3000);