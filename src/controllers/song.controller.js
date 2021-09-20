const Song = require('../models/song');


const songCtrl = {};

songCtrl.getSongs = async (req, res) => {
    const songs = await Song.find();
    res.json(songs);
};

songCtrl.saveSong = async (req, res) => {
    const { title, lyric, author, creator, labels, rating } = req.body;
    if (title && lyric) {
        const song = new Song({ title, lyric, author, creator, labels, rating });
        await song.save();
        res.json({ status: 'Song Saved' });
    } else {
        console.error("No parameters found", req.body);
    }
};

songCtrl.getSong = async (req, res) => {
    const song = await Song.findById(req.params.id);
    res.json(song);
};

songCtrl.updateSong = async (req, res) => {
    const { title, lyric, author, creator, labels, rating } = req.body;
    const newSong = { title, lyric, author, creator, labels, rating };
    await Song.findByIdAndUpdate(req.params.id, newSong);
    res.json({ status: 'Song Updated' });
};

songCtrl.deleteSong = async (req, res) => {
    await Song.findByIdAndRemove(req.params.id);
    res.json({ status: 'Song Deleted' });
};

module.exports = songCtrl;

