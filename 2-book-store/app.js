const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
// setup ejs view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set up the handler of posted data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set public folder 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //console.log(__dirname);
    // res.sendFile(__dirname + '/views/index.html');
    //res.sendFile(path.join(__dirname, 'views', 'index.html'));
    // console.log(req);
    res.render('index');
})

app.get('/contactus', (req, res) => {
    //console.log(__dirname);
    // res.sendFile(__dirname + '/views/index.html');
    // res.sendFile(path.join(__dirname, 'views', 'contact.html'));
    // console.log(req);
    res.render('contact');
})
// nodemon app.js
// get post data from contact us form
app.post('/contactus', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});