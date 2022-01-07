const express = require('express');
// import express-fileupload
const fileUpload = require('express-fileupload');
const app = express();

const PORT = process.env.PORT || 3000;

// set express-fileupload middleware
app.use(fileUpload({
    // set up the file uploading limit to 50mb
    // limit should be in bytes
    limits: { fileSize: 50 * 1024 * 1024  },
}))

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/upload.html');
});
app.post('/upload', (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})