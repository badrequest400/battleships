var assert = require('chai').assert;
var expect = require('chai').expect;
var shoot = require('../lib.js').shoot;

describe('Testing the shoot function', function() {

    var board = {
        a: ['a1', 'a2', 'a3', 'a4']
    };

    it('Returns error message on non-valid input', function() {
        assert(shoot(board, 'somethingelse'), 'PLEASE SUPPLY INPUT IN THE FORM OF LETTER PLUS NUMBER 1-10 (e.g. A5)');
    });

    it('Returns HIT after a successful shot', function() {
        assert(shoot(board, 'a1'), 'HIT!');
    });

    it('Ship array is shorter by one segment after successful hit', function() {
        assert(board.a.length, 3);
    });

    it('After taking out all segments, returns message and ship is deleted from board', function() {
        shoot(board, 'a2')
        shoot(board, 'a3')
        assert(shoot(board, 'a4'), 'SHIP IS DESTROYED');
        expect(board['a']).to.be.undefined;
    });
});
