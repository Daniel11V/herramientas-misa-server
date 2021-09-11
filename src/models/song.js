const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = model('Song', SongSchema);
