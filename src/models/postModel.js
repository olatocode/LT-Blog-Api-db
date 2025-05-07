const mongoose = require('mongoose');
const paginate = require("mongoose-paginate-v2");

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

postSchema.plugin(paginate);
// convert the schema to model
const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;