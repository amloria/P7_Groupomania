const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  userId: { type: String, default: "" },
  description: { type: String, required: true, default: "" },
  imageUrl: { type: String, default: "" },
  likes: { type: Number, default: 0 },
  usersLiked: [{ type: String }],
  createdAt: { type: String },
  comments: [{ type: String }],
  keyRef: { type: String },
});

module.exports = mongoose.model("Article", articleSchema);
