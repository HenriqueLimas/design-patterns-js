var moduleTest = (function() {
    var counter = 0;

    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log('Counter before reset: ' + counter);
            counter = 0;
        }
    };
})();

moduleTest.incrementCounter();
moduleTest.resetCounter();

var revelingModules = (function() {
    var counter = 0;

    function incrementCounter() {
        return counter++;
    }

    function resetCounter() {
        console.log('Counter before reset: ' + counter);
        counter = 0;
    }

    return {
        incrementCounter: incrementCounter,
        resetCounter: resetCounter
    };
})();
