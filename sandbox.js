// Functions
// Function declaration
function greet() {
    console.log('hello there');
}
greet();


//function expression

const speak = function(name = 'Maris', surname = 'Petrov'){
    console.log(`Hello ${name} ${surname}`);
};
speak('Margarita', 'Dzerina');

const calculateArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}

const myCircle = calculateArea(5);
console.log(myCircle);

// arrow functions
const arrowCalculateArea = (radius) => {
    return 3.14 * radius**2;
}
// const arrowCalculateArea = radius => 3.14 * radius**2;  //if only one variable
console.log(`Area is ${arrowCalculateArea(10)}`);

const bill = function(product, tax){
    let total = 0;
    for (let i = 0; i < product.length; i++){
        total +=product[i] + product[i] * tax;
    }
    return total;
}

const arrowBill = (product, tax) => {
    let total = 0;
    for (let i = 0; i < product.length; i++){
        total +=product[i] + product[i] * tax;
    }
    return total;
}
let product = [4, 5, 2, 7];
console.log(`Total bill is ${arrowBill(product, 0.02)} eur`)

// forEach
let people = ['Max', 'Denis', 'Alex', 'Ivan'];

// for (let i = 0; i < people.length; i++){
//     console.log(people[i]);
// };

people.forEach(person => {
    console.log(person);
});

// 

const sortArray = function (array) {
    let array2 = [];
    let a = array.length;
    for (let i = 0; i < a; i++){
        let min = Math.min(...array);
        array2[i] = min;
        array.splice(array.indexOf(min), 1);
    }
  
    return array2;
}

let array = [4, 3, 7, 9, 9, -7, 0];
console.log(`Sorted array: ${sortArray(array)}`);
