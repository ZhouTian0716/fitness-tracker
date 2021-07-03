const router = require("express").Router();
const Workout = require("../models/workoutSchema.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });



router.get("/api/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.find({}).sort({ date: 1 });
    workoutData.forEach(workout => {workout.sumDuration()});
    res.status(200).json(workoutData);
  } 
  catch (err) {
    res.status(400).json(err);
  }   
});




module.exports = router;
