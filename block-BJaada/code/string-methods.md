Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Description: The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.
  - Return: it method returns the calligng string   value  converted to uppercase
  - Example:
    ```js
    let name = 'Arya Stark';
    name.toUpperCase();//"ARYA STARK"
    ```
  - `toUpperCase`
   The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
3. `toLowerCase`
  - Description: The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.
  - Return: A new string representing the calling string converted to lower case.
  ```js
  let name = 'ARYA STARK';
  name.toLowerCase() // 'arya stark
  ```
  `toLowerCase`
  The toLowerCase() method returns the calling string value converted to lower case.
4. `trim`
 - Description: The trim() method returns the string stripped of whitespace from both ends. trim() does not affect the value of the str itself.
 - Return: A new string representing the str stripped of whitespace from both ends.
 ```js
 let name = ' Hello world ' ;
 name.trim(); // "Hello world"
 ```
- `trim`
The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
5. `trimEnd`
- Description: It methods return the string stripped of whitespace fromits right end
It do not affect the value of the value of the string itself.
- Return: It return a new string which has remove whitespace to the (right) end.
```js
let name = 'Hello Right  ';
name.trimEnd(); // "Hello Right"
```
- `trimEnd`
 It method removes whitespace from the end of a string.
6. `trimStart`
- Description: 
The trimStart() / trimLeft() methods return the string stripped of whitespace from its left end. trimLeft() or trimStart() do not affect the value of the string itself.
- Return:
A new string representing the calling string stripped of whitespace from its beginning (left end).
```js
let name = "   Hello World";
name.trimStart() // "Hello World"
```
- `trimStark()`
The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
7. `concat`
- Description: 
The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.
If the arguments are not of the type string, they are converted to string values before concatenating.
- Return:
It concating two string and provide a new string
```js
let firstName = "Ravi";
let lastName = "Rajpoot";
firstName.concat(' ', lastName);
```
- `concat`
it concatenates the string arguments to the calling string and returns a new string
8. `endsWith`

9. `includes`
- Parameters:
A string to be searched for within str
default value 0
- Return:
true if the search string is found anywhere within the given string otherwise, false if not
```js
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
sentence.includes(word);// 1
````
- `includes`
The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf`
- Parameters 
The string value to search for.
If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str.
So, for example: 'undefined'.indexOf() will return 0, as undefined is found at position 0 in the string undefined. 'undefine'.indexOf() however will return -1, as undefined is not found in the string undefine.
An integer representing the index at which to start the search. Defaults to 0.
For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.
For example, 'hello world'.indexOf('o', -5) will return 4, as it starts at position 0, and o is found at position 4. On the other hand, 'hello world'.indexOf('o', 11) (and with any fromIndex value greater than 11) will return -1, as the search is started at position 11, a position after the end of the string.
- Return:
The index of the first occurrence of searchValue, or -1 if not found.
```js
let name = "Ravi Rajpoot";
name.indexOf(' ', 5);//-1
name.indexOf(' ', 4); //4 
```
- `indexOf`
It  return the index within the calling string object of the first occurrence of the specified value starting the search at fromIndex .
11. `lastIndexOf`
- Parameters:
A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
- Return:
The index of the last occurrence of searchValue; -1 if not found.
```js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
paragraph.lastIndexOf(searchTerm);//52
```
- `lastIndexOf`
it return the index within the calling string object of the last occurrence of the specified value,searching backwards from fromIndex. return -1 if the value is not found.
12. `padEnd`
- Parameters:
if the value is lower than str.length, the current string will be returned as-is.
- Return:
A String of the specified targetLength with the padString applied at the end of the current str.
```js
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));// "Breaded Mushrooms........"
'abc'.padEnd(10);//"abc       "
```
- `padEnd`
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`

14. `repeat`
15. `replace`
16. `slice`
- Parameters:
beginIndex
The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.

If beginIndex is greater than or equal to str.length, an empty string is returned.

endIndex Optional
The zero-based index before which to end extraction. The character at this index will not be included.

If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string. If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3, it is treated as str.length - 3.) If it is not undefined and not a number after Number(endIndex), an empty string is returned.

If endIndex is specified and startIndex is negative, endIndex should be negative, otherwise an empty string is returned. (For example, slice(-3, 0) returns "".)

If endIndex is specified, and startIndex and endIndex are both positive or negative, endIndex should be greater than startIndex, otherwise an empty string is returned. (For example, slice(-1, -3) or slice(3, 1) returns "".)
Return: 
A new string containing the extracted section of the string.
```js
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));// expected output: "the lazy dog."
```
- `slice`
it remove a section of a string and return it as a new string, without modifying the original string
17. `split`
- parameters:
separator Optional
The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.

The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
If separator contains multiple characters, that entire character sequence must be found in order to split.
If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
limit Optional
A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
If limit is 0, [] is returned.
- Return:
An Array of strings, split at each point where the separator occurs in the given string.
```js
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);// expected output: "k"
const strCopy = str.split();
console.log(strCopy);// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```
- `split`
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. 

18. `substring`
