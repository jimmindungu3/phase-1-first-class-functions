// - The `receivesAFunction` function should:
//   - take a _callback function_ as an argument
//   - call the callback function
//   - it doesn't matter what this function returns, so long as it calls the
//     callback function

function receivesAFunction(addTwoNumbers) {
    addTwoNumbers();
}
function addTwoNumbers(a, b) {
    a + b;
}
receivesAFunction(addTwoNumbers());


// - The `returnsANamedFunction` function should:
//   - take no arguments
//   - return a _named function_

function returnsANamedFunction() {
    function myName() {
    }
    return myName;
  }
  const myFunction = returnsANamedFunction();
  myName();


// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_

function returnsAnAnonymousFunction() {
    return function() {
    };
  }
  const myCallBackFunction = returnsAnAnonymousFunction();
  myCallBackFunction();