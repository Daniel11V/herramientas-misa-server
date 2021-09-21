const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
    title: { type: String, required: true },
    lyric: { type: String, required: true },
    creator: { type: String, required: true },
    author: { type: String, required: false },
    labels: { type: Array, required: false },
    rating: { type: Array, required: false }
});

module.exports = model('Song', SongSchema);
