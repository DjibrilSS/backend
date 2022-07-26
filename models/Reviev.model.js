const mongoose = require("mongoose");
const revievSchema = mongoose.Schema({
  name: String,
  book: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
});
const Reviev = mongoose.model("reviev", revievSchema);

module.exports = Reviev;
