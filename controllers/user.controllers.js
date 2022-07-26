const { findById } = require("../models/User.model");
const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.userControllers = {
  getUsers: async function (req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.json("ошибка при поиске пользователей");
    }
  },
  addUser: async function (req, res) {
    try {
      await User.create({
        name: req.body.name,
        book: req.body.book,
        isBlock: false,
      });
      res.json("пользователь добавлен");
    } catch (e) {
      res.json("ошибка при добавлении пользователя");
    }
  },
  updateUser: async function (req, res) {
    try {
      User.findByIdAndUpdate(req.params.id, req.body);
      res.json("пользователь изменен");
    } catch (e) {
      res.json("ошибка при изменении пользователя");
    }
  },
  deleteUser: async function (req, res) {
    try {
      User.findByIdAndDelete(req.params.id);
      res.json("пользователь удален");
    } catch (e) {
      res.json("ошибка при удалении пользователя");
    }
  },
  rentBookUser: async function (req, res) {
    try {
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.body.book);
      if (user.book.length >= 3) {
        return res.json("у вас максимальное количество книг");
      }
      if (book.user !== undefined) {
        return res.json("книга уже арендована");
      }
      if (user.isBlock) {
        return res.json("вы заблокированы");
      }
      await user.update({
        $push: { book: book._id },
      });
      await book.update({
        $push: { user: user._id },
      });
      res.json("книга арендована");
    } catch (e) {
      res.json(e);
    }
  },
  removeBook: async function (req, res) {
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { book: req.body.book },
    });
    await Book.findByIdAndUpdate(req.body.book, {
      $pull: { user: req.params.id },
    });
    res.json("книга отдана");
  },
  removeBookAdmin: async function (req, res) {
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { book: req.body.book },
    });
    await Book.findByIdAndUpdate(req.body.book, {
      $pull: { user: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, { isBlock: !User.isBlock });
    res.json("книга отобрана. Пользователь заблокирован");
  },
};
