const express = require("express");
const router = express.Router();
const {
  register,
  getUsers,
  getSingleId,
  deleteUser,
  updateUser,
} = require("../controllers/authController.js");

router.post("/register", register);
router.get("/users", getUsers);
router.get("/users/:id", getSingleId);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

module.exports = router;
