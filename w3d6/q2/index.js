const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("form", {
        bootstrapCDN: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        formSubmitURL: '/result',
        pageTitle: "Form"
    });
});


app.post('/result', (req, res, next) => {

    let name = req.body.name;
    let age = req.body.age;

    if (!name) name = "person";
    if (!age) age = 20;

    res.render("result", {
        bootstrapCDN: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        pageTitle: "Result",
        name: name,
        age: age,
    });
});

app.listen(3000);