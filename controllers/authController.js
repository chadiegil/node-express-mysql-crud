const db = require("../models/db.js");

const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User exists!");

    // create a user
    const createUser =
      "INSERT INTO users(`username`,`email`,`password`) VALUES(?)";
    const values = [req.body.username, req.body.email, req.body.password];

    db.query(createUser, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created!");
    });
  });
};

const getUsers = (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const getSingleId = (req, res) => {
  const q = "SELECT * FROM users WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(404).json("User not found!");
    return res.status(200).json(data);
  });
};

const deleteUser = (req, res) => {
  const q = "DELETE FROM users WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(404).json(err);
    res.json("User deleted");
  });
};

const updateUser = (req, res) => {
  const q =
    "UPDATE users SET `username`=?,`email`=?, `password`=? WHERE `id`= ?";
  const values = [req.body.username, req.body.email, req.body.password];

  db.query(q, [...values, req.params.id, res.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("POST has been updateed!");
  });
};

const login = (req, res) => {
  const q = "SELECT * FROM users WHERE `email` = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(404).json("User exists!");

    if (data.length === 0) return res.status(404).json("User not found!");

    const isPasswordCorrect = req.body.password === data[0].password;

    if (!isPasswordCorrect) return res.status(400).json("Wrong credentials");
    res.status(200).json("Login!");
  });
};

module.exports = {
  register,
  getUsers,
  getSingleId,
  deleteUser,
  updateUser,
  login,
};
