 //Function toArray
  // Accepts object
  //returns Array
  //object - {a: 1, b: 2}
  //returns - [["a", 1], ["b", 2]]
  //add code to file toArray.js 
  //and push to Github

// let obj = {a: 1, b: 2};
// function changeToArray(obj){
//     return Object.entries(obj); 
//     };
//    console.log(changeToArray(obj));
    

function changeToArray(obj){
let a = Object.keys(obj);
let b = Object.values(obj);
for (let i = 0; i < a.length; i++){
    console.log(`["${a[i]}", ${b[i]}]`);
}
}
let obj = {a: 1, b: 2};
changeToArray(obj);
