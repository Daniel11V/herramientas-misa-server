const { Router } = require('express');
const router = Router();

const { getReadings, updateReadings } = require('../controllers/readings.controller');

router.route('/')
    .get(getReadings)
    .post(updateReadings);

module.exports = router;