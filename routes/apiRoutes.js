const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate().then((data) => {
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
router.put('/api/workouts/:id', ({ body }, res) => {
    Workout.insertMany(body)
    .then((data) => {
        res.json(data)
    })
})

router.get('/api/workouts/range', (req,res) => {
    
})
module.exports = router;