var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var http = require('http');


var index = require('./routes/index');
var users = require('./routes/users');
var polls = require('./routes/polls');
var results = require('./routes/results');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Database connection
app.use(function (req, res, next) {
  global.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belatrix_polls'
  });

  connection.connect();
  // // Database setup

  connection.query('CREATE DATABASE IF NOT EXISTS belatrix_polls', function (err) {
    if (err) throw err;
    connection.query('USE belatrix_polls', function (err) {
      if (err) throw err;

      connection.query('CREATE TABLE IF NOT EXISTS results(' +
        'id INT NOT NULL AUTO_INCREMENT,' +
        'PRIMARY KEY(id),' +
        'pollId VARCHAR(30),' +
        'firstname VARCHAR(30),' +
        'lastname VARCHAR(30),' +
        'email VARCHAR(64),' +
        'country VARCHAR(30),' +
        'organization VARCHAR(30),' +
        'jobTitle VARCHAR(30),' +
        'comments VARCHAR(120)' +
        ')',
        function (err) {
          if (err) throw err;
        });

      connection.query('CREATE TABLE IF NOT EXISTS polls(' +
        'id INT NOT NULL AUTO_INCREMENT,' +
        'PRIMARY KEY(id),' +
        'title VARCHAR(100),' +
        'bgImage VARCHAR(255),' +
        'questionsBgImage VARCHAR(255),' +
        'bgColor VARCHAR(64),' +
        'primaryColor VARCHAR(30),' +
        'secundaryColor VARCHAR(30),' +
        'questions VARCHAR(255)' +
        ')',
        function (err) {
          if (err) throw err;
        });
    });

  });


  next();
});
app.use('/', index);
app.use('/api/v1/users', users);
app.use('/api/v1/polls', polls);
app.use('/api/v1/results', results);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var server = http.createServer(app);
server.listen(4001);
console.log("Express server listening on port %d in %s mode", server.address().port, "dev");
