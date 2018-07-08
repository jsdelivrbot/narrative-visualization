var express = require("express");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + 'views'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/pages/narration.html");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



//
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
//
// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   //.set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/test'))
//   //.get('/', (req, res) => res.send('Hello world!'))
//     .listen(PORT, () => console.log(`Listening on ${ PORT }`))
