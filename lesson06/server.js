const { log } = require('console');
const express = require('express');
const path = require('path');
const cors = require('cors'); 
const app = express();
const { logger, logEvents } = require('./middleware/logEvents')
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger); 
// Cross Origin Resource Sharing
app.use(cors());

// built in middleware to handle urlencoded data
// in other words: form data:
// 'content-type: application/x-www-form-urlencoded' 
app.use(express.urlencoded({ extended: false }));

// built in middleware for json 
app.use(express.json());

// serve static files 
app.use(express.static(path.join(__dirname, '/public')));


app.get('^/$|/index(.html)?', (req, res) => {
  //res.sendFile('./views/index.html', { root: __dirname})
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html'); //302 response code by default
});

// Route handlers


app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));