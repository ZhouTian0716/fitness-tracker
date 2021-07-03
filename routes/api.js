const router = require("express").Router();
const Workout = require("../models/workoutSchema.js");

// Index Page Rendering
router.get("/api/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.find({}).sort({ date: 1 });
    workoutData.forEach( workout => { workout.sumDuration() } );
    res.status(200).json(workoutData);
  } 
  catch (err) {
    res.status(400).json(err);
  }   
});

// Create workout
router.post("/api/workouts", async ( { body } , res) => {
  try {
    const workoutData = await Workout.create(body);
    res.status(200).json(workoutData);
  } 
  catch (err) {
    res.status(400).json(err);
  }   
});

// Add excercise
router.put("/api/workouts/:id", async (req, res) => {
  try {
    const newExercise = await Workout.findOneAndUpdate(
      {_id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body }
      },
      { new: true }
    );
    res.status(200).json(newExercise);
  } 
  catch (err) {
    res.status(400).json(err);
  }   
});

// Status Page Rendering
router.get("/api/workouts/range", async (req, res) => {
  try {
    const workoutData = await Workout.find({});
    workoutData.forEach( workout => { workout.sumDuration() } );
    res.status(200).json(workoutData);
  } 
  catch (err) {
    res.status(400).json(err);
  }   
});

module.exports = router;
