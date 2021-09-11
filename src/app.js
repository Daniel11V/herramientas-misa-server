const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());  // Allow servers to exchange data
app.use(express.json());  // Allow json format

// Routes
app.use('/api/songs', require('./routes/song.route'));
app.use('/api/readings', require('./routes/readings.route'));

// Static files
// app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;