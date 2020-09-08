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
