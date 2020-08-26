"use strict";

// Write your code here:
var reverseArray = function reverseArray(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}; // When you're ready to test your code, uncomment the below and run:


var sentence = ['sense.', 'make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)); // Should print ['This', 'will', 'all', 'make', 'sense.'];