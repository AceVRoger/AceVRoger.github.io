let map = [];
let tile1 = null, tile2 = null;
let matchedCount = 0; // count of matched pairs

// TODO: write the project code
const loadMap = (rows = 4, cols = 4) => {
    //Ensuring the tiles left are even when/If I change the default settings
    if ((rows * cols) % 2 !== 0) {
        console.error('Error in tile count (Not Even Count).')
        return;
    };

    // calculating max value of pairs
    const maxValue = (rows * cols) / 2;

    // array to hold tile pairs
    const pairs = [];
    for (let i = 1; i <= maxValue; i++) {
        pairs.push(i, i); // should make each number appear twice?
    };

    //shuffling
    const shuffledPairs = shuffle(pairs);
    console.log(shuffledPairs);

    let titleIndex = 0;
    map = []; // Resetting map

    // 2D-Array with the shuffled pairs
    for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
            row.push(shuffledPairs[titleIndex]);
            titleIndex++;
        }
        map.push(row);
    }
    console.log(map);
};

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const makeBoard = (rows = 4, cols = 4) => {
    // Make sure map loads...
    if (map.length === 0) {
        console.error("Map didn't load... Error");
        return;
    }

    let output = '<table>';
    for (let row = 0; row < rows; row++) {
        output += '<tr>';
        for (let col = 0; col < cols; col++) {
            output += `<td><button class="tile" id="${row}_${col}" onclick="process(${row}, ${col})"></button></td>`;
    }
    output += '</tr>';
}
document.getElementById('gameBoard').innerHTML = output + '</table>';
};

// CLicked Tiles:
const process = (row = 4, col = 4) => {
    let clickedTile = document.getElementById(row + '_' + col);

    // Clicked tile not already contains data
    if (!Boolean(clickedTile.innerHTML)){

        // Tile 1 not yet selected
        if (!tile1) {
            tile1 = clickedTile;
            clickedTile.innerHTML = map[row][col];

        }
        // Tile 2 not yet selected
        else if (!tile2) {
            tile2 = clickedTile;
            clickedTile.innerHTML = map[row][col];

            // TODO: Set timeout callback function
            setTimeout(checkMatch, 1000);
        }
    }
};

const checkMatch = () => {

    if (tile1.innerHTML === tile2.innerHTML) {
        // If tiles match, hide them
        tile1.hidden = true;
        tile2.hidden = true;
        matchedCount += 1;

        if (matchedCount === (map.length * map[0].length) / 2) {
            alert("Congrats! You Matched Them ALL!!!")
        }
    }

    // resetting tiles if they didn't match
    tile1.innerHTML = '';
    tile2.innerHTML = '';
    tile1 = tile2 = null;
};

const resetBoard = () => {
    loadMap(4, 4);
    makeBoard(4, 4);
    tile1 = tile2 = null;
    matchedCount = 0;
};

resetBoard();
