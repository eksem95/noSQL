const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            },
        }
    ]).then((data) => {
        console.log(data)
        res.json(data)
    })
        .catch((error) => {
            res.json(error)
        })
});
//create workout
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch((error) => {
            res.json(error)
        })
});
//create new exercise
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } }
    )
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.get('/api/workouts/range', async (req, res) => {
    Workout.find({})
        .limit(7)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;