const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path to the views directory
app.set('views', './views');

// Define a route for the homepage
app.get('/', function(req, res) {
  res.render('homepage');
});

// Define routes for the other pages
app.get('/playerstats', function(req, res) {
  res.render('playerstats');
});

app.get('/game', function(req, res) {
    res.render('game');
  });

app.get('/props', function(req, res) {
  res.render('props');
});

app.get('/signin', function(req, res) {
  res.render('signin');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});