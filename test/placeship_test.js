var expect = require('chai').expect;
var assert = require('chai').assert;
var placeShip = require('../lib.js').placeShip;

describe('Testing the placeShip function', function() {

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var column_count = 10;
    var ships = {a: 5, b: 4, c: 4};

    it('Returns an array of ships with the right length', function() {
        expect(placeShip(letters, column_count, ships.a).length).to.equal(5);
    });

    it('Returns an array with members of form: a5', function() {
        var ship = placeShip(letters, column_count, ships.a);

        assert(function() {
            for (var i=0; i<ship.length; i++) {
                if(!ship[i].match(/[a-z][1-9]/g)) {
                    return false;
                };
            };

            return true;
            
        }, true);
    });

});
