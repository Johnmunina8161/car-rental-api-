const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);
