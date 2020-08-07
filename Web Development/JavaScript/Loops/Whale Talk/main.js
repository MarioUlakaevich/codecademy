let input = 'I am the best Programmer'; //Sentence we wanna translate 
const vowels = ['a', 'e', 'i', 'o', 'u']; //Whale's alphabet 

let resultArray = [];

//Checking whether there are letter in our sentence that are equals to letters in vowels Array 
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]){ //if there is the same letters 
      resultArray.push(input[i]); // push them in resultArray
      if (input[i] === 'e' || input[i] === 'u'){ //Dobble 'e's and 'u's
        resultArray.push(input[i]);
      }
    }
  }
}
//Log the result
console.log(resultArray.join('').toUpperCase());