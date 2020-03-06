

// function doubleIt(num){
//     return num * 2;
// }


// const doubleIt = function myFun(num){
//     return num * 2;
// }


// const result = doubleIt(500);



//single line arrow function
const doubleIt = num => num * 2; //single parameter
const add = (x, y) => x + y; //multiple parameter
const give5 = () => 5; //no parameter

//multi line arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
}



const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);