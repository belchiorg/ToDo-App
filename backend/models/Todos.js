const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  todo: String,
  author: String
})

module.exports = mongoose.model('todo', TodoSchema);