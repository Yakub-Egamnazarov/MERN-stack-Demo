const express = require("express");

// CREATE express app
const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// LISTEN FOR REQUESTS
app.listen(4000, () => {
  console.log("listening on port:4000");
});
