const express = require('express');


const adminRouter = express.Router();

// check if user is logged in
adminRouter.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
})
// all routes here are protected

adminRouter.get('/', (req, res) => {
    res.render('admin', {name: req.session.user.name})
})

adminRouter.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})



module.exports = adminRouter;

