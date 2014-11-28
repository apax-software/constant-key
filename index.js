var R = require("ramda");

// return object with key/value from supplied string
function keyPair (key) {
    var obj = {};
    obj[key] = key;
    
    return obj;
}

var createConstObj = R.reduce(R.mixin, {});

module.exports = R.compose(createConstObj, R.map(keyPair));