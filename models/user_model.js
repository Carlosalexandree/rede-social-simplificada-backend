const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
  },
  bio: {
    type: String,
    maxlenght: 200, //Para não ficar muito grande
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", Userschema);

module.exports = User;
