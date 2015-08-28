var battleships = require('./lib.js');
var prompt = require('prompt-sync').prompt;

// THE GAME BOARD IN THE FORM OF {ship1: [coord, coord], ship2: [coord, coord]}
// THIS DATA STRUCT WILL BE QUITE EFFICIENT FOR BOTH CHECKING SHOTS AND CHECKING SUNK SHIPS
var board={};

battleships.setup(board);


// GAME LOOP
while(Object.keys(board).length > 0) {

    process.stdout.write('Choose a target! or Q to quit!');
    var pr = prompt();
    if (pr == 'Q') {
        break;
    } else {
        console.log(battleships.shoot(board, pr));
    };
};
