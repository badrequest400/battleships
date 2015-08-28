var expect = require('chai').expect;
var overlap = require('../lib.js').overlap;

describe('Testing the overlap function', function() {

    var board = {
        a: ['a1', 'a2', 'a3', 'a4']
    };

    it('Returns True with overlapping ship', function() {
        var ship = ['a1', 'b1', 'c1', 'd1'];

        expect(overlap(board, ship)).to.be.true;
    });

    it('Returns False with non-overlapping ship', function() {
        var ship = ['b1', 'c1', 'd1', 'e1'];

        expect(overlap(board, ship)).to.be.false;
    });
});
