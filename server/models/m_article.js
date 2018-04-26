var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
  title: String,
  content: String,
  category: String,
  author: String
}, {
  timestamps: true
});

var Article = mongoose.model('article', schema);

module.exports = Article