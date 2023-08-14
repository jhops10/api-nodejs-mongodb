const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@api-nodejs-mongodb.ydnbitm.mongodb.net/api-nodejs-mongodb?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

module.exports = mongoose;