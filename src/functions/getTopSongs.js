import Song from '../models/song.js';
import cheerio from 'cheerio';
import axios from 'axios';

const getGospel = async (base, input) => {
    let gospel = null;

    if (base === 'EvInput') {
        gospel = input.trim().toLowerCase();;
    } else {
        let day;
        if (base === 'EvDom') {
            day = 'evangelio-del-domingo';
        } else {
            day = 'evangelio-del-dia';
        }

        try {
            const { data } = await axios.get(`https://www.ciudadredonda.org/calendario-lecturas/${day}`);
            const $ = cheerio.load(data);
            $('.lecturas section').each((i, select) => {
                let type = $(select).find('h2').text().trim().toLowerCase();
                let number = $(select).find('.texto_palabra b').first().text().trim().toLowerCase();
                $(select).find('.texto_palabra b').remove();
                let text = $(select).find('.texto_palabra').remove('b').text().trim().toLowerCase();

                // console.log('----------------------------------------');
                // console.log('A:\n', type);
                // console.log('AA:\n', number);
                // console.log('AAA:\n', text);

                if (type.includes('evangelio')) {
                    // console.log(25, text);
                    gospel = text;
                }
            });
        } catch (err) {
            console.error(err);
        }

        return gospel;
    }
}

const getTopSongs = async (base, input) => {
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

                if (counter >= 3) {
                    return false;
                } else {
                    return true;
                }
            })
        });
    }
    // console.log('onlySong: ', onlySong);



    // Find/Set Gospel    
    const gospel = await getGospel(base, input);

    // Gospel About
    let gospelWords = gospel;
    gospelWords = gospelWords.replace("\n", "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "").trim().split(" ");
    const labels = {
        maria: ['maria', 'madre'],
        padre: ['padre', 'creador'],
        jesus: ['jesus', 'maestro', 'discipulo', 'hijo', 'mesias', 'salvador'],
        espiritu_santo: ['espiritu', 'soplo', 'sopla', 'viento', 'fuego', 'paloma', 'santo']
    }
    const conectors = ['a', 'al', 'aquel', 'donde', 'dice', 'dijo', 'de', 'del', 'con', 'en', 'el', 'esta', 'les', 'lo', 'los', 'las', 'mas', 'mi', 'me', 'no', 'para', 'pues', 'porque', 'que', 'sus', 'se', 'ser', 'sea', 'sin', 'uno', 'una', 'y'];
    let gospelLabels = {};

    for (const person in labels) {
        for (const name of labels[person]) {
            if (gospelWords.includes(name)) {
                console.log('Incluye: ', name);
                if (gospelLabels[person]) {
                    gospelLabels[person] = gospelLabels[person] + 1;
                } else {
                    gospelLabels[person] = 1;
                }
            }
        }
    }


    // Todas las palabras

    // for (let i = 0; i < gospelWords.length; i++) {
    //     if (gospelWords[i].length > 2 && conectors.indexOf(gospelWords[i]) < 0) {
    //         let currentWordCount = gospelLabels[gospelWords[i]];
    //         let count = currentWordCount ? currentWordCount : 0;
    //         gospelLabels[gospelWords[i]] = count + 1;
    //     }
    // }
    console.log(gospelLabels);


    // Find Top Songs




    const topSongs = [];

    return topSongs;
}

export default getTopSongs;