const { log } = require('console');
const express = require('express');
const path = require('path');
const cors = require('cors'); 
const app = express();
const { logger, logEvents } = require('./middleware/logEvents');
const  errorHandler  = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger); 

// Cross Origin Resource Sharing
const whitelist = ['https://www.site.com', 'http://127.0.0.1:5500', 'http://localhost:3500', 'https://www.google.com']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }, 
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

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
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type('txt').send("404 not Found");
  }
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));