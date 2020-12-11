let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let averageGrade = persons.reduce((acc, curr) => acc + curr.grade, 0)/persons.length;
// Find the average grade of male
let male = persons.filter(element => element.sex === 'M')
let averageGradeMale = persons.reduce((acc, curr) => { if(curr.sex === "M") {acc+= curr.grade} return acc },0)/male.length;
// Find the average grade of female
let feMale = persons.filter(element => element.sex === 'F')
let averageGradeFeMale = persons.reduce((acc, curr) => { if(curr.sex === "F") {acc+= curr.grade} return acc },0)/feMale.length;
// Find the highest grade
let highestGrade = persons.reduce((a, b) => a < b.grade ? b.grade : a, 0);
// Find the highest grade in male
let highestGradeMale = persons.reduce((a, b) => (b.sex === "M") && (a < b.grade) ? b.grade : a, 0);
// Find the highest grade in female
let highestGradeFeMale = persons.reduce((a, b) => (b.sex === "F") && (a < b.grade) ? b.grade : a, 0);
// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeStartJandP = persons.reduce((a, b) => (b.name.startsWith('J') || b.name.startsWith('P')) && (a < b.grade) ? b.grade : a, 0);
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((acc,curr) => {
  let count = 0;

  for (let fruit of fruitBasket) {
       if(fruit === curr) {
         count+=1
    }
     acc[curr] = count;
  }
  return acc;
}, {});
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let reduceData = data.reduce((a, b) => {
  for (const i of b) {
    a.push(i);
  }
  return a ;
},[]);
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let twoDataReduce = dataTwo.reduce((a, b) => {
  for (let i of b) {
    if(i.length > 0){
      for (let  c of i) {
        a.push(c)
      }
    }else{
      a.push(i);
    }
  }
  return a ;
},[]);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
function increment(value){
  return value +=1 ;
}
function double(value) {
  return value*=2;
}
function decrement(value) {
  return value -= 1;
}
function triple(value) {
  return value *= 3;
}
function half(value) {
  return Math.round(value/2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipelineResult = pipeline.reduce((a,b) => b(a) , 3);


let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
let pipeline2Result = pipeline2.reduce((a,b) => b(a) , 8);