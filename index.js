const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.js");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

// Make a GET request to the /hello route
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
