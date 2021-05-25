console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Test - should say 'Hello, Benji!': ${helloName('Benji')}`);

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log(`Test - input (100, 823) should return 923: ${addNumbers( 100,823 )}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0,num1,num2 ){
  return num0 * num1 * num2;
}
console.log(`Test - input (3, 6, 8) should return 144: ${multiplyThree( 3,6,8 )}`);


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  // check if number is positive
  if ( number > 0 ){
    return true;
  }
  // if we reach this state, number is not positive
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  // arrays are zero-indexed, so last item will be at array length - 1
  return array[array.length - 1];
}
let dwarfs = [ 'Grumpy','Sleepy','Sneezy','Doc','Bashful','Happy','Dopey' ];
console.log(`Test - should say 'Dopey': ${getLast( dwarfs )}`);

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  // loop through all elements in array
  for (x of array){
    // check if element is equal to desired value
    if (x === value){
      return true;
    }
  }
  // we checked all elements in the array and didn't find the value
  return false;
}
console.log(`Test - we are searching for 'Sleepy' in dwarfs array. Should return true: ${find('Sleepy',dwarfs)}`);
console.log(`Test - we are searching for 'Snow White' in dwarfs array. Should return false: ${find('Snow White',dwarfs)}`);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  // use .substring(start, end) to pull first letter
  return letter === string.substring(0,1);
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array0 ) {
  let sum = 0
  // TODO: loop to add items
  for (x of array0){
    sum += x;
  }
  return sum;
}
console.log(`Test - should say 162: ${sumAll([ 1,4,6,2,45,100,4 ])}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function extractPositives( array0 ){
  // initialize empty array
  let positives = [];
  // cycle through input array, element by element
  for (x of array0) {
    // use my isPositive function from earlier question
    // if an element is positive, push it into my initialized function
    if (isPositive(x)){
      positives.push(x);
    }
  }
  // return positives array; if there were no positives in array0, it will be empty
  return positives;
}
console.log(`Test - should say [1,2,3,4]: ${extractPositives([ 1,-4,-6,2,-45,3,-100,4,0 ])}`);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
