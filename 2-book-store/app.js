const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// set public folder 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //console.log(__dirname);
    // res.sendFile(__dirname + '/views/index.html');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    // console.log(req);
})

app.get('/contactus', (req, res) => {
    //console.log(__dirname);
    // res.sendFile(__dirname + '/views/index.html');
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
    // console.log(req);
})
// nodemon app.js


app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});