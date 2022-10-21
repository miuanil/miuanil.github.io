const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('<form action="/result" method="post"><label>Name<input name="name" type="text"></label><label>Age<input name="age" type="text"></label><button type="submit">Submit Query</button></form>');
});


app.post('/result', (req, res, next) => {

    let name = req.body.name;
    let age = req.body.age;

    if (!name) name = "person";
    if (!age) age = 20;

    res.send(`Welcome ${name}. Your age is ${age}`);
});

app.listen(3000);