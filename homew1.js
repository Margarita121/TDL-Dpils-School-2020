/*
You have array - numbers;
Example:
numbers[2, 3, 4];

If array length is odd number (1, 3, 5) - you should return second 
biggest number from array and print it in console
Example:
array - numbers[2, 3, 4, 5, 6];
result in console - 'The second biggest number is 5'

If array length is even number (2, 4, 6) - you should return 
arithmetic mean of those numbers
Example:
array - numbers[2, 3, 4, 5, 6, 7];
result in console - 'The mean number is 4.5'
*/

let numbers = [2, 3, 6, 4];
let a = 0;
if (numbers.length % 2 == 1){
    let first = Math.max(...numbers);
    numbers.splice(numbers.indexOf(first), 1);
    let second = Math.max(...numbers);
    console.log(`The second biggest number is ${second}`);
} else {
    for (let i = 0; i < numbers.length; i++){
        a = a + numbers[i];
    }
    console.log(`The arithmetic mean of numbers in array is ${a / numbers.length}`);
}