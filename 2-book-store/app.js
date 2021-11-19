const express = require('express');
const path = require('path');
const emailSender = require('./models/emailSender');
const db = require('./models/db');
require('dotenv').config()

console.log('email_host', process.env.PORT);

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
    emailSender.sendEmail(req.body.name, req.body.email, req.body.message, (ok, result) => {
        if(ok) {
            res.json({result: 'done'})
        } else {
            res.json({result: 'error'})
        }
    });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/register', async (req, res) => {
    // res.json, res.send, res.render, res.redirect, res.sendFile
    // make sure the previous command will run ONLY once
    console.log(req.body);
    const {name, email,username,password} = req.body;
    try {
        const userByEmail = await db.checkUserEmail(email);
        const userByUsername = await db.checkUserName(username); 
        if(userByEmail) {
            res.json({result: 'email exist'})
        } else {
            if (userByUsername) {
                res.json({result: 'username exist'})
            } else {
                const user = await db.registerUser(name, email, username, password);
                const result = await emailSender.confirmEmail(email, name, user.id);
                res.json({result: 'done'})
            }
        }
    } catch(error) {
        console.log(error);
        res.json({result: 'error'})
    }
})

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});


// mongodb+srv://<username>:<password>@cluster0.rmrmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://book_store_user:!234qweR@cluster0.rmrmn.mongodb.net/book_store_db?retryWrites=true&w=majority