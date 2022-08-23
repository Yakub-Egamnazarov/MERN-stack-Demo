require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
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

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // once connected to the database, will be listenning to the PORT
    // LISTEN FOR REQUESTS
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & Listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
