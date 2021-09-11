const Song = require('../models/song');

const songCtrl = {};

songCtrl.getSongs = async (req, res) => {
    const songs = await Song.find();
    res.json(songs);
};

songCtrl.saveSong = async (req, res) => {
    const { title, description } = req.body;
    if (title && description) {
        const song = new Song({ title, description });
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
    const { title, description } = req.body;
    const newSong = { title, description };
    await Song.findByIdAndUpdate(req.params.id, newSong);
    res.json({ status: 'Song Updated' });
};

songCtrl.deleteSong = async (req, res) => {
    await Song.findByIdAndRemove(req.params.id);
    res.json({ status: 'Song Deleted' });
};

module.exports = songCtrl;

