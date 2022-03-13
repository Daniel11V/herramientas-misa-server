import Song from '../models/song.js';

export const getSongs = async (req, res) => {
    const songs = await Song.find();
    res.json(songs);
};

export const saveSong = async (req, res) => {
    const { title, lyric, author, creator, chords, pulse, tempo, labels, rating } = req.body;
    if (title && lyric) {
        const song = new Song({ title, lyric, author, creator, chords, pulse, tempo, labels, rating });
        await song.save();
        res.json({ status: 'Song Saved' });
    } else {
        console.error("No parameters found", req.body);
    }
};

export const getSong = async (req, res) => {
    const song = await Song.findById(req.params.id);
    res.json(song);
};

export const updateSong = async (req, res) => {
    const { title, lyric, author, creator, chords, pulse, tempo, labels, rating } = req.body;
    const newSong = { title, lyric, author, creator, chords, pulse, tempo, labels, rating };
    await Song.findByIdAndUpdate(req.params.id, newSong);
    res.json({ status: 'Song Updated' });
};

export const deleteSong = async (req, res) => {
    await Song.findByIdAndRemove(req.params.id);
    res.json({ status: 'Song Deleted' });
};

