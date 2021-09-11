const Readings = require('../models/readings');

const readingsCtrl = {};

readingsCtrl.getReadings = async (req, res) => {
    const readings = await Readings.find();
    res.json(readings);
};

readingsCtrl.updateReadings = async (req, res) => {
    const { gospel, first_readings } = req.body;
    const readings = await Readings.find();
    if (readings[0]) {
        await Readings.findOneAndUpdate(readings[0]._id, { gospel, first_readings });
        res.json({ status: 'Readings Updated' });
    } else {
        const newReadings = new Readings({ gospel, first_readings });
        await newReadings.save();
        res.json({ status: 'Readings Saved' });
    }
};

module.exports = readingsCtrl;