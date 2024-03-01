// find
// fillter
// every
// some
// for of
// forEach
// map
// reduce

//-------------------------------------------------------------------------------------------------------------------------------------
//const arr = [2, 4, 6, 8, 10];

//-------------------------------------------------------------------------------------------------------------------------------------
// find use only for find one number or object in array. It returns the value of found element or undefined if no element was found.
// const result = arr.find((value, index) => {
//   if (value < 4) {
//     return value;
//   }
// });

//-------------------------------------------------------------------------------------------------------------------------------------
//filter use for  create new array with all the elements that pass a condition it is like opposite to find method
// const result = arr.filter((value, index) => {
//   if (value > 4) {
//     return value;
//   }
// });
//-------------------------------------------------------------------------------------------------------------------------------------
// every use  case: check all elements in array pass the test(provided function). If any element fails to pass it will return false.
// const result = arr.every((value, index) => {
//   if (value < 2) {
//     return value;
//   }
// });

//-------------------------------------------------------------------------------------------------------------------------------------
// some use  case: check if there is at least one element that satisfies the condition.
// const result = arr.some((value, index) => {
//   return value < 2;
// });

//-------------------------------------------------------------------------------------------------------------------------------------
//for of use  case: just loop through all elements in array without returning anything.

// for (let value of arr) {
//   value += 3;
//   console.log(value);
// }
//-------------------------------------------------------------------------------------------------------------------------------------
// forEach use case: similar to for of but it takes a callback function and executes this function on each iteration with item as argument.
// arr.forEach((value, index) => {
//   value *= 2;
//   console.log(value);
// });
//-----------------------------------------   ----------------------------------------------------------------------------
// if you want to total or sum of element with the help of foreach method:
// let total = 0;
// arr.forEach((value, index) => {
//   total += value;
// });
// console.log(total);

//-------------------------------------------------------------------------------------------------------------------------------------
// map method use  case: create a new array with the results of calling a provided function on every element in the array
// const result = arr.map((value, index) => {
//   return (value += 10);
// });
// console.log(result);

//-------------------------------------------------------------------------------------------------------------------------------------
// reduce method use  case: it takes a callback function and reduces an array into single value.
// const result = arr.reduce((previousValue, currentValue, index) => {
//   previousValue += currentValue;
//   return previousValue;
// });
//-------------------------------------------------------------------------------------------------------------------------------------
//console.log(result);
