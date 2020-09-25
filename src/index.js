const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares

//Routing
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Listening
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});