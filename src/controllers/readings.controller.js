const Readings = require('../models/readings');
const getTopSongs = require('../functions/getTopSongs');

const readingsCtrl = {};

readingsCtrl.getReadings = async (req, res) => {
    const readings = await Readings.find();
    res.json(readings);
};

readingsCtrl.updateReadings = async (req, res) => {
    const { base, gospel } = req.body;

    const topSongs = getTopSongs(base, gospel);

    res.json(topSongs);

    // save readings

    // const readings = await Readings.find();
    // if (readings[0]) {
    //     await Readings.findOneAndUpdate(readings[0]._id, { base, gospel });
    //     res.json({ status: 'Readings Updated' });
    // } else {
    //     const newReadings = new Readings({ base, gospel });
    //     await newReadings.save();
    //     res.json({ status: 'Readings Saved' });
    // }
};

module.exports = readingsCtrl;