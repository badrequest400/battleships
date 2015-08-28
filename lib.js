var conf = require('./config.js').config;

module.exports.setup = function(board) {

    for (var i in conf.ships) {
        board[i] = generateShip(conf.letters, conf.column_count, conf.ships[i], board);
    };
};

// GENERATE A NEW SHIP
// CHECK IF IT OVERLAPS WITH EXISTING
// RECURSIVELY KEEP TRYING UNTIL IT WORKS
function generateShip(letters, column_count, length, board) {

    var ship = module.exports.placeShip(letters, column_count, length);
    if (module.exports.overlap(board, ship)) {
        return generateShip(letters, column_count, length, board);
    } else {
        return ship;
    };
};

module.exports.placeShip = function(letters, column_count, length ) {

    var ship = [];

    // DECIDE IF HORIZONTAL OR VERTICAL PLACEMENT (1 IS HORIZONTAL, 0 IS VERTICAL)
    var orientation = Math.round(Math.random());

    // VERTICAL
    if(orientation == 0) {

        // CHOOSE STARTING LETTER (ROW)
        var offset = letters.length - length; // MAKE SURE SHIP FITS THE BOARD
        var startRow = Math.round(Math.random() * offset);

        // CHOOSE NUMBER (COLUMN)
        var col = Math.round(Math.random() * (column_count - 1)) + 1; // RAND 1 - 10

        // CREATE THE ARRAY OF COORDS REPRESENTING A SHIP
        for (var i=0; i<length;i++) {
            ship.push(letters[startRow + i] + col);
        };

        return ship;

    // HORIZONTAL
    } else {

        // CHOOSE LETTER (ROW)
        var startRow = letters[Math.round(Math.random() * (letters.length - 1))];

        // CHOOSE STARTING NUMBER (COLUMN)
        var offset = column_count - length; // MAKE SURE SHIP FITS ThE BOARD
        var col = Math.round(Math.random() * offset) + 1;

        // CREATE THE ARRAY OF COORDS REPRESENTING A SHIP
        for (var i=0; i<length;i++) {
            ship.push(startRow + (col + i));
        };

        return ship;
    };
};

// CHECK IF A NEW SHIP OVERLAPS WITH ANY OTHER REGISTERED SHIPS ON THE BOARD
module.exports.overlap = function(board, ship) {

    // IF FIRST SHIP --> RETURN
    if (Object.keys(board).length == 0) {
        return false;
    };

    // LOOP THROUGH ALL REGISTERED SHIP ON THE BOARD
    for (var sh in  board) {
        // IF REGISTERED SHIP ON BOARD IS LONGER THAN CURRENT SHIP
        // WE ONLY DO AN EXTRA PASS, IF SHORTER, UNIQENESS IS STILL IDENTIFIED
        for (var i=0; i<board[sh].length; i++) {

            for (var j=0; j<ship.length; j++) {
                if (board[sh][i] == ship[j]) {
                    return true;
                } else {
                    continue;
                };
            };
        };
    };

    return false;
};

// TAKE A SHOT AT A TARGET
// CHECK IF A HIT HAS BEEN MADE AND IF THE SHIP HAS BEEN DESTROYED
module.exports.shoot = function(board, input) {

    // VALIDATE USER INPUT
    if (input.match(/[a-zA-Z][1-9]/g)) {

        for (var i in board) {
            for (var j=0; j<board[i].length; j++) {

                // REMOVE SEGMENT FROM SHIP WHEN HIT
                if(input.toLowerCase() == board[i][j]) {
                    board[i].splice(j, 1);

                    //CHECK IF SHIP IS DESTROYED
                    if(board[i].length == 0) {
                        delete board[i];
                        return 'SHIP IS DESTROYED';
                    };

                    return 'HIT!';
                };
            };
        };

    } else {
        return 'PLEASE SUPPLY INPUT IN THE FORM OF LETTER PLUS NUMBER 1-' + conf.column_count +  ' (e.g. A5)';
    };
};
