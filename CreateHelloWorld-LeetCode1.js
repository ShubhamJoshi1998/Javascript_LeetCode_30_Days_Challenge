// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var args = [{},null,42]
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};


  const f = createHelloWorld(...args);
  f(); // "Hello World"