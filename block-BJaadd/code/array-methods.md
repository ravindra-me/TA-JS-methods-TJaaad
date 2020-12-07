Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
  - Return: a signle string with all array element joined. if arr.length 0 then return empty string
  - Example:
  ```js 
  let helloWorld = ['Hello', 'world', "!"];
  helloWorld.join("");//"HelloWorld!"
  let name = "ravindra singh"
  name.split(" ").join(" ")// "ravindra singh"
  ```
  `join`  it is accept n number of array element then return one string witch made by all concate array element
  - When array has no element that mean empty array then return empty string.
  - depth default value is 0;
3. `flat`
  - Parameter: it is accept all sub-array element which has number string and array etc.
   it depends on depth value which is tell us how deep nasted array structure should be flattend.
  - Return: A new array with the sub-array elements concatenated into it.
  ```js
  let arr = [1,2,3,[1,2,3,[4,5,6,[7,8,9]]]]
  arr.flat(2)//[1,2,3,1,2,3,4,5,6,[7,8,9]]
  let str = [r,[a,[v,[i]]]];
  str.flat(3).join("");//"ravi"
  ```
  `flat`
  - it is create new array with all sub-array elements concatenated into it
  - and new array length also deffrent compair to old array
4. `push`
- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
- Return :  array with the length have change compare to old array. it add element into in arry at last and give a new array with new element;
```js
let number = [1,2,3];
number.push(4);// [1,2,3,4]
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);//4
```
`push`
The push() method adds one or more element to the end of an array and returns the new length of the array
5. `indexOf`
- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
- Return:  number data type that means return first index of an element which a given element can be found in the array
when array has not element which we are founding the index the it return -1 index value
```js
let str = ['ravi', 'raju', 'shyam'];
str.indexOf('ravi');//0
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}
var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
```
`indexOf`
it return first index at which a given element can be found in the array or -1 if it is not present.

6. `lastIndexOf`
- Parameter:  n (any) number of values (number, string, boolean, array, null, undefined, object and function etc).
it don't miutied the array
- Return: it return the last index value which a given element can be found in the array 
```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
console.log(indices);
// [4, 2, 0]
```
`lastIndexOf`: it return last index value  which a given element can be found in the array. 
7. `includes`
 - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc).
 - Return : it is return Boolean value like true and false.
 ```js
 let arr1 = [1,2,3,85];
 arr1.includes(1);// true
 arr1.includes(100);//false
 ```
 `includes`: it determine certain value amongs its entries and return true and false value
8. `reverse`
 - Parameter:it does not accept any value
 - Return: it return reverse array that mean the last element of the array becomes in the first position and first position element beacomes in the last 
 - Return array
 - it is mutable 
 ```js
 let names = ['ravi', 'santosh', 'ashish'];
 names.reverse();//['ashish', 'santosh', 'ravi'];
 const array1 = ['one', 'two', 'three'];
console.log('reverse:', array1.reverse());//['three', 'two', 'one'] 
```
`reverse`: it reverse the array that means last array element becomes in first position and vice versa.
9. `every`
 -Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc).
 -Return: Booleans value
 ```js
arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2
let numbers = [50,20,40];
numbers.every((element, index, arr)=> element>40);// false
 ``` 
 `every`:The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
10. `shift`
- Parameter: it does not accept any value inside the parenthsis and return the shifted value
- Return: It  returns the  element which is the first element of the array.
it is also reduce the length of the array
```js 
let numbers = [1,2,3];
numbers.shift()//[2,3]
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew 
// Edward
// Paul
// Chris
// John
```
11. `splice` 
- Parameter:  n (any) number of values (number, string, boolean, array, null, undefined, object and function etc).
- Return: return new array with add/replace element in the array.
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');//['jan','Feb', 'March', 'April', 'June']
months.splice(1,2,'july')//['jan', 'Feb', 'July', 'April', 'June']
```
`splice`:The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

12. `find`
- Parameter: it accept call back function and call back function accept many parameters like elements and index and array etc.
- Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);// 12
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];
function isCherries(fruit) { 
  return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries)); 
// { name: 'cherries', quantity: 5 }
```
`find`: it return the  value of the first element in the provided array that is setisfied the testing  function

13. `unshift`
- Parameter:  The elements to add to the front of the arr.
- Return: new length array
```js
let numbers = [1,2,3]
numbers.unshift(1,2,3);// [1,2,3,1,2,3];
let arr = [2,5]
arr.unshift([1,5,6])//[2,5,[1,5,6]]
```
`unshift`:The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
14. `findIndex`
- Parameter:it accept call back function
- Return: The index of the first element in the array that passes the test. Otherwise, -1.
```js
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
let colors = ['red','black','white']
console.log(colors.findIndex((element)=> element==='white'));//2
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```
- `findIndex`: it return the index of the first element in the array that satisfied the provided testing function other wise it return -1
15. `filter`

16. `flat`
17. `forEach`
- Parameters: it is accept a call back function which ia accept three value first is element second is index value and third value is arra
- Return: undefined
```js
let words = ['one', 'two', 'three', 'four']
words.forEach((word) => {
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
})
console.log(words);  //['two', 'three',​​​​ 'four']
```
- `forEach` : The forEach method executes a provided function once for each array element
18. `map`
- Parameters: it is accept a call back function which ia accept three value first is element second is index value and third value is arra
-Return: array
```js
let mil = [1,2,5,7];
console.log(mul.map((elem)=> elem*2))//[2,4,10,14]
```
19. `pop`
- Parameter: it does not accept any value
- Return: it return last array element 
```js
 let numbers = [1,2,3];
 numbers.pop()//3
 ```
- `pop()`: The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

20. `reduce`
- Parameters: it accepts four arguments
 Accumulator
 Current Value
 Current Index
 Source Array.
- Return: The single value that results from the reduction. 
```js
let sum = [0, 1, 2, 3].reduce( (accumulator) =>{
  return accumulator + currentValue
}, 10)
//16
```
- `reduce`: reduce method executes a call back function on each element and the initial value we are defind then it is return  single value 
21. `slice`

22. `some`
- Parameters: it is accept call back function
- Return: it return boolean value
```js
let numbers [1,2,3];
numbers.some((e)=> e%3===0);
```
- `some`:The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
