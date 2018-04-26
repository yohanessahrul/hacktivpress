const mongoose = require('mongoose')
var schema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  email: String
}, {
  timestamps: true
})
var User = mongoose.model('User', schema)

module.exports = User