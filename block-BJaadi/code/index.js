var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];
// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
 let newstrings = [...strings]
 newstrings.push('called','sentance');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newstrings.join(' '))
// - Remove the first word in the array (strings)
 newstrings.shift()
 console.log(newstrings)
// - Find all the words that contain 'is' use string method 'includes'
let isIncludes = newstrings.filter(element => element.includes('is')); 
console.log(isIncludes)
// - Find all the words that contain 'is' use string method 'indexOf'
let isConatainWorld = strings.filter((element,index) => {
  if(element.indexOf('is')!==-1){
    return element
  }
})
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(element => element%3===0);
// -  Sort Array from smallest to largest
function sortFunction(a,b){
  return a-b
}
let sortNumbers = [...numbers].sort(sortFunction)
// - Remove the last word in strings
newstrings.pop()
// - Find largest number in numbers
sortNumbers.pop()
// - Find longest string in strings
let longestString = strings.reduce((a,b) => a.length > b.length ? a : b , '');
// - Find all the even numbers
let evenNumber = numbers.filter(element => element%2===0)
// - Find all the odd numbers
let oddNumber = numbers.filter(element => element%2!==0)
// - Place a new word at the start of the array use (unshift)
newstrings.unshift('new ravi');
// - Make a subset of numbers array [18,9,7,11]
let subsetNumbers = numbers.slice(3,7);
// - Make a subset of strings array ['a','collection']
let subsetStrings = strings.slice(2,4)
// - Replace 12 & 18 with 1221 and 1881
// let replaceNumber1 = numbers.indexOf(12);
// numbers[replaceNumber1]=1221;
// let replaceNumber2 = numbers.indexOf(18);
// numbers[replaceNumber2] = 1881;
numbers.map(num => {
  if(num===12){
    return 1221;
  } else if(num===18){
    return 1881
  }else{
    return num;
  }
})

// - Replace words in strings array with the length of the word
let stringsLength = strings.map(element => element.length);
// - Find the sum of the length of words using above question
let sumOfLength = stringsLength.reduce((a,b) => a+b,0);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let customer = customers.filter(element => element.firstname[0]==='J')
console.log(customer)
// - Create new array with only first name
let firstNames = customers.map(element => element.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = customers.map(element => `${element.firstname} ${element.lastname}`);
// - Sort the array created above alphabetically
let sortName = [...fullNames].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelNameContains = firstNames.filter(element => {
 if( element.toLowerCase().includes('a') || element.toLowerCase().includes('e') || element.toLowerCase().includes('i') || element.toLowerCase().includes('o') || element.toLowerCase().includes('u')){
   return true
 }else{
   return false;
 }
}
)