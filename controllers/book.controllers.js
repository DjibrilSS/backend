const Book = require("../models/Book.model");

module.exports.bookControllers = {
  getBooks: async function (req, res) {
    try {
      const book = await Book.find();
      res.json(book);
    } catch (e) {
      res.json("ошибка при поиске книг");
    }
  },
  addBook: async function (req, res) {
    try {
      await Book.create({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        reviev: req.body.reviev,
        user: req.body.user,
      });
      res.json("книга добавлена");
    } catch (e) {
      res.json("ошибка при добавлении книги");
    }
  },
  updateBook: async function (req, res) {
    try {
      Book.findByIdAndUpdate(req.params.id, req.body);
      res.json("книга изменена");
    } catch (e) {
      res.json("ошибка при изменении книги");
    }
  },
  deleteBook: async function (req, res) {
    try {
      Book.findByIdAndDelete(req.params.id);
      res.json("книга удалена");
    } catch (e) {
      res.json("ошибка при удалении книги");
    }
  },
};
