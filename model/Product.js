const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("product", productSchema);
