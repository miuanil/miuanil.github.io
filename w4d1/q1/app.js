const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res, next) => {
    res.render('form', {
        pageTitle: 'Cookie Form',
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        postURL: '/addCookie',
        cookies: req.cookies,
    });
});

app.post('/addCookie', (req, res, next) => {

    if (req.body.key) {
        res.cookie(req.body.key, req.body.value);
    }

    res.redirect('back');
});

app.listen(3000);