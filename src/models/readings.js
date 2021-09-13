const { Schema, model } = require('mongoose');

const ReadingsSchema = new Schema({
    base: { type: String, required: false, default: 'EvDom' },
    gospel: { type: String, required: false },
    first_readings: { type: String, required: false }
});

module.exports = model('Readings', ReadingsSchema);