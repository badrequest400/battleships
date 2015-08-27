module.exports.setup = function(board) {

    // TODO: CHECK SHIPS DON'T OVERLAP

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    board.a = placeShip(letters, 5);
    board.b = placeShip(letters, 4);
    board.c = placeShip(letters, 4);

    console.log(board);
};

function placeShip(letters, length) {

    var ship = [];

    // DECIDE IF HORIZONTAL OR VERTICAL PLACEMENT (1 IS HORIZONTAL, 0 IS VERTICAL)
    var orientation = Math.round(Math.random());

    // VERTICAL
    if(orientation == 0) {

        // CHOOSE STARTING LETTER (ROW)
        var startRow = Math.round(Math.random()*9);

        // CHOOSE NUMBER (COLUMN)
        var col = Math.round(Math.random()*10) + 1;

        for (var i=0; i<length;i++) {
            ship.push(letters[startRow + i] + col);
        };

        return ship;

    // HORIZONTAL
    } else {

        // CHOOSE LETTER (ROW)
        var startRow = letters[Math.round(Math.random()*9)];

        // CHOOSE STARTING NUMBER (COLUMN)
        var col = Math.round(Math.random()*10) + 1;

        for (var i=0; i<length;i++) {
            ship.push(startRow + (col + i));
        };

        return ship
    };
};

module.exports.shoot = function(board, input) {

    for(var i in board) {
        for (var j=0; j<board[i].length; j++) {

            // REMOVE SEGMENT FROM SHIP
            if(input == board[i][j]) {
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
};
