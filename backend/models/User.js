const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");

const generateId = crypto.randomBytes(16).toString("hex");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  followers: { type: Array, default: [] },
  following: { type: Array, default: [] },
  isAdmin: { type: Boolean, default: false },
  keyRef: { type: String, unique: true, default: { generateId } },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
