import express from 'express';
import cors from 'cors';
import SongRoutes from './routes/song.route.js';
import SuggestionRoutes from './routes/suggestion.route.js';
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());  // Allow servers to exchange data
app.use(express.json());  // Allow json format

// Routes
app.use('/api/songs', SongRoutes);
app.use('/api/suggestion', SuggestionRoutes);

// Static files
// app.use(express.static(path.join(__dirname, 'public')));


export default app;