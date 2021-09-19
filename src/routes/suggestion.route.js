const { Router } = require('express');
const router = Router();

const { getSuggestion, updateSuggestion } = require('../controllers/suggestion.controller');

router.route('/')
    .get(getSuggestion)
    .post(updateSuggestion);

module.exports = router;