var i = 10;
var j = 20;
console.log("Hello guys");

function sum(a, b) {
  console.log("Printing.....");
  var c = a + b;
  return c;
}

var result = sum(i, j); //here EC-1 create when function is call and delete after function end.

//javascript is single threaded language which means it can only execute one instruction at a time.
//javascript is synchronous.
//execution context and execution stack  are two important concepts in javascript
//execution context execute in execution stack

/*
                |               |
                |   / EC 2 /    |
                |   / EC1 /     |
                |  /  GEC /     |
                -----------------
 it is  the runtime environment of each function executed by JavaScript program.
 It contains global object , scope chain , variable declarations etc  in GEC--global execution context.
 execution context are created and delete by calling functions in js file.


*/
