const mongoose = require('mongoose');

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  img_url: {
    type: String,
    required: true,
  }
})

module.exports = User;