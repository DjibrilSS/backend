const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(require("./routes/genre.routes"));
app.use(require("./routes/user.routes"));
app.use(require("./routes/book.routes"))

mongoose.connect(
  "mongodb+srv://Djabrail:4815162342@cluster0.wkvhjdw.mongodb.net/?retryWrites=true&w=majority",
  () => {
    app.listen("3000", () => {
      console.log("worked");
    });
  }
);
