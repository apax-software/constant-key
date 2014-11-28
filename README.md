# constant-key


Simple library that takes an array of keys and creates an object with keys

## Example

``` javascript
var APP_STATES = constantKey(['init', 'loading', 'running', 'unloading']);

/*
APP_STATES = {
    init: 'init',
    loading: 'loading',
    running: 'running',
    unloading: 'unloading'
};
*/