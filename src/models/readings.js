const { Schema, model } = require('mongoose');

const ReadingsSchema = new Schema({
    gospel: { type: String, required: false },
    first_readings: { type: String, required: false }
});

module.exports = model('Readings', ReadingsSchema);