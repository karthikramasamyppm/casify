//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/casify';
mongoose.connect(mongoDB);
console.log('in db config1');
mongoose.Promise = global.Promise;

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')*/