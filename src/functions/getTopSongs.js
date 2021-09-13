const Song = require('../models/song');

getTopSongs = async (base, gospel) => {
    const allSongs = await Song.find();

    // Depurar canciones
    const onlySong = [];

    const chords = {
        es: ['DO', 'DO#', 'RE', 'RE#', 'MI', 'FA', 'FA#', 'SOL', 'SOL#', 'LA', 'LA#', 'SI'],
        esMen: ['DOm', 'DO#m', 'REm', 'RE#m', 'MIm', 'FAm', 'FA#m', 'SOLm', 'SOL#m', 'LAm', 'LA#m', 'SIm'],
        esMaj7: ['DOmaj7', 'DO#maj7', 'REmaj7', 'RE#maj7', 'MImaj7', 'FAmaj7', 'FA#maj7', 'SOLmaj7', 'SOL#maj7', 'LAmaj7', 'LA#maj7', 'SImaj7'],
        en: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        enMen: ['Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm'],
        enMaj7: ['Cmaj7', 'C#maj7', 'Dmaj7', 'D#maj7', 'Emaj7', 'Fmaj7', 'F#maj7', 'Gmaj7', 'G#maj7', 'Amaj7', 'A#maj7', 'Bmaj7']
    }

    for (let i = 0; i < allSongs.length; i++) {
        onlySong.push({
            id: allSongs[i]._id,
            title: allSongs[i].title,
            lyric: allSongs[i].lyric.toLowerCase().split('\n').filter(p => {
                if (!p || p.includes('      ')) {
                    return false;
                }

                let counter = 0;
                for (const key in chords) {
                    for (let chord of chords[key]) {
                        chord = chord.toLowerCase();
                        if (p == chord) { return false }

                        if (p.includes(` ${chord} `)) {
                            counter++;
                            if (p.replace(` ${chord} `, '  ').includes(` ${chord} `)) {
                                counter++;
                            }
                        }
                    }
                }

                // if (p == '  DO  FA    SOL DO   ') {
                //     console.log('p: ', p);
                //     console.log('counter: ', counter);
                // }

                if (counter >= 3) {
                    return false;
                } else {
                    return true;
                }
            })
        });
    }

    // console.log('onlySong: ', onlySong);
    // Find Top Songs
    const topSongs = [];

    return topSongs;
}

module.exports = getTopSongs;