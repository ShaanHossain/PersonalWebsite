// const express = require('express')
// const app = express();
// const port = 8000;
//
// app.use(express.static('public'));
//
// app.get('/index.html', function(req, res) {
//   res.sendFile('index.html', {root: __dirname })
//   console.log({root: __dirname })
// });
//
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });

// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/index.ejs', function (req, res) {
    res.render('pages/index');
});

app.get('/contacts.ejs', function (req, res) {
    res.render('pages/contacts');
});

app.get('/resume.ejs', function (req, res) {
    res.render('pages/resume');
});

app.get('/interests.ejs', function (req, res) {
    res.render('pages/interests');
});

app.get('/projects.ejs', function (req, res) {
    res.render('pages/projects');
});



app.get('/contacts_creative.ejs', function (req, res) {
    res.render('pages/contacts_creative');
});

app.get('/contacts_image.ejs', function (req, res) {
    res.render('pages/contacts_image');
});

app.get('/contacts_map.ejs', function (req, res) {
    res.render('pages/contacts_map');
});

app.get('/index_creative.ejs', function (req, res) {
    res.render('pages/index_creative');
});

app.get('/index_image.ejs', function (req, res) {
    res.render('pages/index_image');
});

app.get('/index_onepage.ejs', function (req, res) {
    res.render('pages/index_onepage');
});

app.get('/index_personal.ejs', function (req, res) {
    res.render('pages/index_personal');
});

app.get('/index_slider.ejs', function (req, res) {
    res.render('pages/index_slider');
});

app.get('/index_video.ejs', function (req, res) {
    res.render('pages/index_video');
});

app.get('/resume_creative.ejs', function (req, res) {
    res.render('pages/resume_creative');
});

app.get('/resume_image.ejs', function (req, res) {
    res.render('pages/resume_image');
});

app.get('/resume.ejs', function (req, res) {
    res.render('pages/resume_template');
});

app.get('/work_single_creative.ejs', function (req, res) {
    res.render('pages/work_single_creative');
});

app.get('/work_single_image.ejs', function (req, res) {
    res.render('pages/work_single_image');
});

app.get('/work_single.ejs', function (req, res) {
    res.render('pages/work_single');
});

app.get('/works_creative.ejs', function (req, res) {
    res.render('pages/works_creative');
});

app.get('/works.ejs', function (req, res) {
    res.render('pages/works');
});
