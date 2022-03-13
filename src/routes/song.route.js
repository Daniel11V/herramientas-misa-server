import { Router } from 'express';
const router = Router();

import { getSongs, saveSong, getSong, updateSong, deleteSong } from '../controllers/song.controller.js';

router.route('/')
    .get(getSongs)
    .post(saveSong);

router.route('/:id')
    .get(getSong)
    .put(updateSong)
    .delete(deleteSong);

export default router;