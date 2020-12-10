let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words) {
  return words.reduce((acc, curr) => acc.length < curr.length ? curr : acc, "")
}
console.log(findLongestWord(words))
// - Convert the above array "words" into an array of length of word instead of word.
words.map(element => element.length);
// - Create a new array that only contains word with atleast one vowel.
function checkVowel(element) {
  return  (
    element.toLowerCase().includes('a') || 
    element.toLowerCase().includes('e') || 
    element.toLowerCase().includes('i') || 
    element.toLowerCase().includes('o') || 
    element.toLowerCase().includes('u') 
  )
}
let vowelWorld = words.filter(element => checkVowel(element))
// - Find the index of the word "rhythm"
words.findIndex(element => element==='rhythm')
// - Create a new array that contians words not starting with vowel.
let noStartVowelWorld = words.filter(element => !checkVowel(element[0]))
// - Create a new array that contianse words not ending with vowel

let noEndVowelWorld = words.filter(element => !checkVowel(element[element.length -1]))

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = numbers.reduce((acc, curr) => acc + curr, 0)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedNumber = numbers.map((num) => num*3 );
// - Create a new array that contains only even numbers
let evenNumber = numbers.filter(element => element%2!==0)
// - Create  a new array that contains only odd numbers.
let oddNumber = numbers.filter(element => element%2===0)
// - Create a new array that should have true for even number and false for odd numbers.
let trueForEvenOdd = numbers.map(element => element%2===0 ? true : false);
// - Sort the above number in assending order.
[...numbers].sort((a, b) => a - b )
// - Does sort mutate the original array?
// yes
// - Find the sum of the numbers in the array.
let sum =  numbers.reduce((a,b) => a + b , 0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr) {
  let average = arr.reduce((acc, curr) => acc + curr , 0)
  return average / arr.length
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr) {
  let averageLength = arr.reduce((a,b) => a + b.length,0)
  return averageLength/arr.length
}