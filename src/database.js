const mongoose = require('mongoose');

const URI = (process.env.MONGODB_URI ||
    process.env.MONGODB_URI_LOCAL);

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;