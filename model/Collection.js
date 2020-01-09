const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("collection", collectionSchema);
