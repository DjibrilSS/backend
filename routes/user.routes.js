const { Router } = require("express");
const router = Router();
const { userControllers } = require("../controllers/user.controllers");

router.get("/admin/users", userControllers.getUsers);
router.post("/admin/users", userControllers.addUser);
router.patch("/admin/users/id", userControllers.updateUser);
router.delete("/admin/users/id", userControllers.deleteUser);
router.patch("/users/:id", userControllers.rentBookUser);
router.patch("/users/delete/:id", userControllers.removeBook);
router.patch("/admin/users/delete/:id", userControllers.removeBookAdmin);

module.exports = router;
