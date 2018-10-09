var Mongoose = require('mongoose');
//load database
Mongoose.connect('mongodb://blxpoll:Hola.1234@ds027748.mlab.com:27748/blxpolls');
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});
exports.db = db;