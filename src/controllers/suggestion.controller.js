const Suggestion = require('../models/suggestion');
const getTopSongs = require('../functions/getTopSongs');

const suggestionCtrl = {};

suggestionCtrl.getSuggestion = async (req, res) => {
    const suggestion = await Suggestion.find();
    res.json(suggestion);
};

suggestionCtrl.updateSuggestion = async (req, res) => {
    const { base, input } = req.body;

    const topSongs = getTopSongs(base, input);

    res.json(topSongs);

    // save suggestion

    // const suggestion = await Suggestion.find();
    // if (suggestion[0]) {
    //     await Suggestion.findOneAndUpdate(suggestion[0]._id, { base, gospel });
    //     res.json({ status: 'Suggestion Updated' });
    // } else {
    //     const newSuggestion = new Suggestion({ base, gospel });
    //     await newSuggestion.save();
    //     res.json({ status: 'Suggestion Saved' });
    // }
};

module.exports = suggestionCtrl;