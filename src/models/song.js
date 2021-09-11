const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
    title: { type: String, required: true },
    lyric: { type: String, required: true },
    author: { type: String, required: false },
    creator: { type: String, required: false },
    rating: { type: String, required: false }
});

module.exports = model('Song', SongSchema);
