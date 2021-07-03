const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter workout type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter workout name"
      },
      duration: {
        type: Number,
        required: "Enter workout duration"
      },
      weight: {
        type: Number,
        required: "Enter workout weight"
      },
      reps: {
        type: Number,
        required: "Enter workout reps"
      },
      sets: {
        type: Number,
        required: "Enter workout sets"
      },
      distance: {
        type: Number,
        required: "Enter workout distance"
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now
  },

  totalDuration: {
    type: Number,
    default: 0,
  }

});

// workoutSchema.methods.coolifier = function() {
//   this.name = `${this.name}...the Coolest!`;
//   return this.name;
// };


workoutSchema.methods.sumDuration = function() {
  console.log(this.exercises);
  if(this.exercises){
    var sum = 0;
    for(let i=0; i < this.exercises.length; i++){
      sum = sum + this.exercises[i].duration;
    }
    this.totalDuration = sum;
    return this.totalDuration;
  }
  else { return }
};



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
