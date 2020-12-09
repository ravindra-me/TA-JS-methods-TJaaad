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

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map(element => element.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(element => element.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(element => element.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = peopelName.filter(element => element.startsWith('J') || element.startsWith('P') ? true : false);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
filterName.forEach(element => console.log(element.length));
// Log all the filtered male ('M') in persons array
let maleSex = peopleSex.filter(element => element === "M");
// Log all the filtered female ('F') in persons array
let femaleSex = peopleSex.filter(element => element === "M");
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// Log all the even numbers from peopleGrade array
let evenNumbers = peopleGrade.filter(element => element%2===0);
// Find the first name that starts with 'J' in persons array and log the object
let jNameObj = persons.filter(element => element.name.startsWith('J'));
// Find the first name that starts with 'P' in persons array and log the object
let firstNameStartP = persons.find(element => element.name.startsWith('P'));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let firstNameStartJ = persons.find(element => element.name.startsWith('J') && element.grade > 10);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(element => element.sex === "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(element => element.sex === "M");
// Find the sum of all grades and store in gradeTotal
let sumGrade =  peopleGrade.reduce((a,b) => a + b , 0);
// Find the average grade
let averageGrade =  peopleGrade.reduce((a,b) => a + b , 0)/ peopleGrade.length;
// Find the average grade of male
let averageMaleGrade = persons.reduce((a, b) => {
  if(b.sex === "M"){
    return a + b.grade;
  }
  return a;
}, 0)
// Find the average grade of female
let averageFemaleGrade = persons.reduce((a, b) => {
  if(b.sex === "F"){
    return a + b.grade;
  }
  return a;
}, 0)
// Find the highest grade
let highestGrade = persons.reduce((a, b) => a < b.grade ? b.grade : a , 0)
// Find the highest grade in male
let highestGradeMale  =  persons.reduce((a, b) => b.sex === "M" && a < b.grade ? b.grade : a , 0);
// Find the highest grade in female
let highestGradeFeMale  =  persons.reduce((a, b) => b.sex === "F" && a < b.grade ? b.grade : a , 0);
// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeStartJandP  =  persons.reduce((a, b) =>{
  if(b.name.startsWith('J') || b.name.startsWith('P')) {
    return a < b.grade ? b.grade : a;
  }
  return a;
},0 );
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);
// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);
console.log(peopleGrade);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => b - a);
console.log(peopleGrade)
// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();
console.log(peopelName);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort();
console.log(peopelName);