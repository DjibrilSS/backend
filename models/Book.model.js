const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "genre",
  },
  reviev: { type: mongoose.Schema.Types.ObjectId, ref: "reviev" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
const Book = mongoose.model("book", bookSchema);

module.exports = Book;
