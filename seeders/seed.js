const Workout = require('../models/workoutSchema');
require("./config/connection.js");

const workoutSeed = [
  {
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bicep Curl',
        duration: 20,
        weight: 20,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: 'resistance',
        name: 'Lateral Pull',
        duration: 20,
        weight: 40,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: 'resistance',
        name: 'Push Press',
        duration: 25,
        weight: 60,
        reps: 8,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: 'cardio',
        name: 'Running',
        duration: 25,
        distance: 10,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 60,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 65,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: 'resistance',
        name: 'Quad Press',
        duration: 30,
        weight: 80,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 55,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 50,
        reps: 10,
        sets: 4,
      },
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 200,
        reps: 10,
        sets: 4,
      },
    ],
  },
];

Workout.deleteMany({})
  .then(() => Workout.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
