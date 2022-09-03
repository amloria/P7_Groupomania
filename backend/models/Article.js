const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  likes: { type: Number, default: 0 },
  usersLiked: [{ type: String }],
  createdAt: { type: String },
  comments: [{ type: String }],
  keyRef: { type: String },
});

module.exports = mongoose.model("Article", articleSchema);
