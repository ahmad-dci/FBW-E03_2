const express = require('express');
const cors = require('cors');

const app = express();
//accept requests from any origin
app.use(cors());
// accept  requests from the same origin
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static('public'));
const port = process.env.PORT || 4000;

const rooms = [
    "General",
    "JavaScript",
    "NodeJS",
    "ReactJS",
    "HTML",
    "CSS",
    "MongoDB",
    "ExpressJS"
];
app.post('/getrooms', (req, res) => {
    res.send(JSON.stringify(rooms));
})





app.get('*', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})