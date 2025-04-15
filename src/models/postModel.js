const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

// convert the schema to model
const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;