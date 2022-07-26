const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  book: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
  ],
  isBlock: Boolean,
});
const User = mongoose.model("user", userSchema);

module.exports = User;
