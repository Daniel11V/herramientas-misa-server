const { Router } = require('express');
const router = Router();

const { getSongs, saveSong, getSong, updateSong, deleteSong } = require('../controllers/song.controller');

router.route('/')
    .get(getSongs)
    .post(saveSong);

router.route('/:id')
    .get(getSong)
    .put(updateSong)
    .delete(deleteSong);

module.exports = router;