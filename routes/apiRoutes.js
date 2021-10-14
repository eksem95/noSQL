const router = require('express').Router();
const workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    workout.aggregate().then((data) => {
        console.log(data)
        res.json(data)
    })
    .catch((error) => {
        res.json(error)
    })
})

module.exports = router;