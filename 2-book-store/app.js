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
        if (ok) {
            res.json({ result: 'done' })
        } else {
            res.json({ result: 'error' })
        }
    });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    const user = await db.checkUserName(username);
    if (user) {
        // check password

    } else {
        res.json({ result: 'user is not exist' })
    }

})

app.post('/register', async (req, res) => {
    // res.json, res.send, res.render, res.redirect, res.sendFile
    // make sure the previous command will run ONLY once
    console.log(req.body);
    const { name, email, username, password } = req.body;
    try {
        const userByEmail = await db.checkUserEmail(email);
        const userByUsername = await db.checkUserName(username);
        if (userByEmail) {
            res.json({ result: 'email exist' })
        } else {
            if (userByUsername) {
                res.json({ result: 'username exist' })
            } else {
                const user = await db.registerUser(name, email, username, password);
                const result = await emailSender.confirmEmail(email, name, user.id);
                res.json({ result: 'done' })
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ result: 'error' })
    }
})


app.get('/confirm/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await db.confirmEmail(id);
        if (result) {
            if (result.verified) {
                res.send(`
                <h1>Your email is already verified</h1>
                <a href="/login">Go to login page</a>
                `);
            } else {
                res.send(`
        <h1>Thank you for confirming your email</h1>
        <a href="/login">Go to home page</a>
    `);
            }
        } else {
            res.send(`your confirmation link is not valid`);
        }
    } catch (error) {
        res.send(`your confirmation link is not valid`);
    }
});

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


// task: 
// 1- send the login data: [username, password ] when the user click login
// 2- use fetch with 'POST' method to send the data to the server
// 3- in the server side [app.js] just log the data to the console