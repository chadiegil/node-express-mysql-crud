const express = require("express");
const router = express.Router();
const {
  register,
  getUsers,
  getSingleId,
  deleteUser,
  updateUser,
  login,
} = require("../controllers/authController.js");

router.post("/register", register);
router.get("/users", getUsers);
router.get("/users/:id", getSingleId);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/login", login);

module.exports = router;
