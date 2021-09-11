const Readings = require('../models/readings');

const readingsCtrl = {};

readingsCtrl.getReadings = async (req, res) => {
    const readings = await Readings.find();
    res.json(readings);
};

readingsCtrl.updateReadings = async (req, res) => {
    const { gospel, first_readings } = req.body;
    const newReadings = { gospel, first_readings };
    const readings = await Readings.find();
    await Readings.findByIdAndUpdate(readings[0]._id, newReadings);
    res.json({ status: 'Reading Updated' });
};

module.exports = readingsCtrl;