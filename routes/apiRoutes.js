const router = require("express").Router();
const Workout = require("../models/workout.js");

//routes for API calls 
//GET routes
router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  //POST route
  router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //PUT route
  router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne({_id: req.params.id}, {
      $push: {exercises:req.body}
    }).then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
    
  module.exports = router;
  
