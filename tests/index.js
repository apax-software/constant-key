var test = require('tape');
var constantKey = require('../index');

test('create object from array', function (t) {
    t.plan(2);
    
    var CONSTANTS = constantKey([
        'START',
        'MIDDLE',
        'ANOTHER',
        'STOP'
    ]);
    
    t.equal(Object.keys(CONSTANTS).length, 4);
    t.deepEqual(
        CONSTANTS, 
        {
            START: 'START',
            MIDDLE: 'MIDDLE',
            ANOTHER: 'ANOTHER',
            STOP: 'STOP'
        }
    );
});