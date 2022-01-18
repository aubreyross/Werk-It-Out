//UPDATE THIS FILE
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter name of workout"
  },
  day: {
    type: Date,
    default: Date.now
  },
  duration: {
    type: Number,
    required: "Enter duration of workout"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

