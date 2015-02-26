var mySingleton = (function() {
    var instance;

    function init() {
        var myPrivateVariable = 42;

        function myPrivateMethod() {
            console.log('myPrivateVariable', myPrivateVariable);
        }
        var privateRandomNumber = Math.random();

        return {
            myPublicMethod: function() {
                console.log('I am a public method.');
            },
            publicProperty: 'I am public property',

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    };
})();


var singletonA = mySingleton.getInstance();
var singletonB = mySingleton.getInstance();

console.log(singletonA === singletonB);