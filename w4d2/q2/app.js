const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'public', 'javascript')));


app.use(function (req, res, next) {
    res.locals.eightBallList = [
        "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
        "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
        "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"
    ];

    next();
});


app.get("/", (req, res) => {
    res.render("form", {
        bootstrapCDN: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        pageTitle: 'Form',
        jqueryCDN: 'https://code.jquery.com/jquery-3.6.0.min.js',
    });
});

app.get("/8ball", (req, res) => {
    // console.log(req.query);
    let randomNumber = Math.floor(Math.random() * 20);
    let data = res.locals.eightBallList[randomNumber];
    res.status(200).json({result: data});
    res.end();
});

app.post("/add", (req, res) => {
    console.log(req.body);
    list[req.body.fname + " " + req.body.lname + " " + req.body.arrival_time] = { ...req.body };
    res.status(200);
    res.end();
});

app.get("/list", (req, res) => {
    res.render("list", { list: list });
});

app.listen(3000);