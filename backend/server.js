require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");

// CREATE express app
const app = express();

// middleware
app.use(express.json()); // accessing the request body and parsing through json modul
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// LISTEN FOR REQUESTS
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
