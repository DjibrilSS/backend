const { Router } = require("express");
const router = Router();
const { genreControllers } = require("../controllers/genre.controllers");

router.get("/admin/genres", genreControllers.getGenres);
router.post("/admin/genres", genreControllers.addGenres);
router.patch("/admin/genres/:id", genreControllers.updateGenres);
router.delete("/admin/genres/:id", genreControllers.deleteGenres);
module.exports = router;
