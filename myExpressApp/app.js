var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//Testing this projects first feature branch check-in.
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const formID = ''; //Insert form ID here.
var endPoint = 'https://api.fillout.com/v1/api/forms/' + formID + '/submissions';
const bearerToken = 'Bearer '; //Insert token here.
(async () => {
  try {
  const response = await fetch(endPoint, {
    headers: {
        'Authorization': bearerToken,
        'Accept': '*/*',
        'Host': 'api.fillout.com',
        'Connection': 'keep-alive'
    }
});     
const body = await response.text();
console.log(body);
  } catch (error) {
    console.error(error);
  }
})();
module.exports = app;



