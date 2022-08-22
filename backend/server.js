require("dotenv").config();

const express = require("express");

// CREATE express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// LISTEN FOR REQUESTS
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
