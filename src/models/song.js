const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
    title: { type: String, required: true },
    lyric: { type: String, required: true },
    author: { type: String, required: false },
    creator: { type: String, required: false },
    topics: { type: Array, required: false },
    labels: { type: Array, required: false },
    rating: { type: Array, required: false }
});

module.exports = model('Song', SongSchema);
