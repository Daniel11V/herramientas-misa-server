import Suggestion from '../models/suggestion.js';
import getTopSongs from '../functions/getTopSongs.js';

export const getSuggestion = async (req, res) => {
    const suggestion = await Suggestion.find();
    res.json(suggestion);
};

export const updateSuggestion = async (req, res) => {
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