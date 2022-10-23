const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'public','css')));

app.get('/', (req, res) => {
    const date = new Date();
    
    let hour = date.getHours();
    let cssFile = (hour > 6 && hour < 18) ? 'day.css' : 'night.css';
    
    res.render("index", {
        time: date.toTimeString(),
        cssFile: cssFile
    });
});

app.listen(3000);