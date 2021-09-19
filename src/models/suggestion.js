const { Schema, model } = require('mongoose');

const SuggestionSchema = new Schema({
    base: { type: String, required: false, default: 'EvDom' },
    input: { type: String, required: false },
    first_readings: { type: Boolean, required: false, default: true }
});

module.exports = model('Suggestion', SuggestionSchema);