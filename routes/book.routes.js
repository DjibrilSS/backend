const { Router } = require("express");
const router = Router();
const { bookControllers } = require("../controllers/book.controllers");

router.get("/admin/books", bookControllers.getBooks);
router.post("/admin/books", bookControllers.addBook);
router.patch("/admin/books/:id", bookControllers.updateBook);
router.delete("/admin/books/:id", bookControllers.deleteBook);

module.exports = router;
