const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get single Workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE Workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout workout" });
});

module.exports = router;
