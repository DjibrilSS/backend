const Genre = require("../models/Genre.model");

module.exports.genreControllers = {
  getGenres: async function (req, res) {
    try {
      const genre = await Genre.find();
      res.json(genre);
    } catch (e) {
      res.json("ошибка при поиске жанров");
    }
  },
  addGenres: async function (req, res) {
    try {
      await Genre.create({
        name: req.body.name,
      });
      res.json("жанр добавлен");
    } catch (e) {
      res.json("ошибка при добавлении жанра");
    }
  },
  updateGenres: async function (req, res) {
    try {
      Genre.findByIdAndUpdate(req.params.id, req.body);
      res.json("жанр изменен");
    } catch (e) {
      res.json("ошибка при изменении жанра");
    }
  },
  deleteGenres: async function (req, res) {
    try {
      Genre.findByIdAndDelete(req.params.id);
      res.json("жанр удален");
    } catch (e) {
      res.json("ошибка при удалении жанра");
    }
  },
};
