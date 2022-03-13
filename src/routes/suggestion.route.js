import { Router } from 'express';
const router = Router();

import { getSuggestion, updateSuggestion } from '../controllers/suggestion.controller.js';

router.route('/')
    .get(getSuggestion)
    .post(updateSuggestion);

export default router;