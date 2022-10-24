const express = require("express");
const path = require("path");
const session = require('express-session');
// const flash = require('flash');
const rootDir = require('./util/path');

const app = express();

const date = new Date();
const hour = date.getHours();
let cssFile = (hour > 6 && hour < 18) ? 'day.css' : 'night.css';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(rootDir, 'public', 'stylesheets')));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing'
}));

// app.use(flash());

// app.use(function (req, res, next) {
//     req.flash(req.body.name, req.body.age);
//     next();
// });

app.get("/", (req, res, next) => {
    res.render('form', {
        pageTitle: 'Form',
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        postURL: '/result',
        cssFile: cssFile
    });
});

app.post('/result', (req, res, next) => {
    // Using session.
    req.session['name'] = req.body.name;
    req.session['age'] = req.body.age;

    res.redirect(303, '/output');
});

app.get('/output', (req, res, next) => {
    res.render('output', {
        name: req.session.name, // Using session
        age: req.session.age, // Using session
        // name: (res.locals.flash[0]) ? (res.locals.flash[0].type ?? '') : '', // Using flash
        // age: (res.locals.flash[0]) ? (res.locals.flash[0].message ?? '') : '', // Using flash
        pageTitle: 'Output',
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        cssFile: cssFile
    });
});

app.listen(3000);