const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creates new schema in mongoDB containing the respective properties
const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
  
        type: {
          type: String,
          required: "Type of exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Name of workout"
        },
        duration: {
          type: Number,
          required: "Duration of workout"
        },
        distance: {
          type: Number
        },
        weight: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        },
      },
  ],

  totalDuration: {
    type: Number,
    },
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;

