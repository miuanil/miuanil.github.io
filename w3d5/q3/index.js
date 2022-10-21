const express = require('express');
const app = express();
const path = require('path');
const rootDir = require('./util/path');

const date = new Date();
const hour = date.getHours();

let cssFile = (hour > 6 && hour < 18) ? 'day.css' : 'night.css';
app.use('/css/style.css', express.static(path.join(rootDir, 'public','css', cssFile)));

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {

    res.sendFile(path.join(rootDir, 'views', 'form.html'));
});


app.post('/result', (req, res, next) => {

    let name = req.body.name;
    let age = req.body.age;

    if (!name) name = "person";
    if (!age) age = 20;


    res.send(`Welcome ${name}. Your age is ${age}`);
});

app.listen(3000);