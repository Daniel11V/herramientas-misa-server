import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const SongSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    creator: { type: String, required: true },
    lyric: { type: String, required: true },
    chords: { type: Object, required: false },
    pulse: { type: String, required: false },
    tempo: { type: String, required: false },
    labels: { type: Array, required: false },
    rating: { type: Array, required: false }
});

export default model('Song', SongSchema);
