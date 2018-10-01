var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var http = require('http');

var CONSTANTS = require('./app.config');
var migrations = require('./app.migrations');
var dummyData = require('./app.dummy-entries');

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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Database connection
app.use(function (req, res, next) {
  global.connection = mysql.createConnection({
    host: CONSTANTS.dbConfig.host,
    user: CONSTANTS.dbConfig.user,
    password: CONSTANTS.dbConfig.password,
    database: CONSTANTS.dbConfig.database
  });

  global.connection.connect();
  // // Database setup
  connection = migrations(global.connection);
  // connection = dummyData(global.connection)

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
