const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get single Workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE Workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
