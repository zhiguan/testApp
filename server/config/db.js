const connection = 'mongodb://127.0.0.1:27017/tetApp';
const mongoose = require('mongoose');

const db = mongoose.connect(connection);

module.exports = db;