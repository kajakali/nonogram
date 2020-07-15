
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');



// Route includes
const patternRouter = require('./routes/pattern.router');
const crossStitchRouter = require('./routes/crossstitch.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Routes */
app.use('/pattern', patternRouter);
app.use('/crossstitch', crossStitchRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
