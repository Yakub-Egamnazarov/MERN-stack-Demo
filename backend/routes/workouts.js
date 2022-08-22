const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

// Get single Workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single Workout" });
});

// POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

// DELETE Workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout workout" });
});

module.exports = router;
