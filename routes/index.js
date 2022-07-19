const express = require('express');

const routeToNotes = require('./notes');



const app = express();

app.use('/notes', routeToNotes);


module.exports = app;