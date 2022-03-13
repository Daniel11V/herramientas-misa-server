import { } from 'dotenv/config';

import app from './app.js';

import './database.js';

// Starting the server
function main() {
    app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}

main();