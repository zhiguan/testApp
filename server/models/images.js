const mongoose = require('mongoose');
//image collection structure
const imageSchema = new mongoose.Schema({
  url: String,
  title: String,
  context: String
});

//image model
module.exports = mongoose.model('Images', imageSchema);
