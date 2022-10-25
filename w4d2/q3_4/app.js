const express = require("express");
const path = require("path");
const session = require('express-session');
const app = express();
const indexRoute = require('./routes/route');
const helper = require('./util/helper');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing'
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {

    if (!req.session.cart) {
        req.session.cart = {};
    }

    res.locals.total = helper.getCartDetail(req).itemTotal;

    next();
});

app.use('/js', express.static(path.join(__dirname, 'public', 'javascript')));
app.use('/css', express.static(path.join(__dirname, 'public', 'stylesheets')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRoute);


app.listen(3000);