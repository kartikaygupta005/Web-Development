//example of functions

//console.log("hello world");
//[1,2,3].push(4);


//functionm definition
/*function functionName(parameters) {
    //code to be executed
}

//function call
functionName(arguments);
*/
/*
function myfunction() {
    console.log("hello world");
    console.log("hello kartikay");
}


for(let i=0; i<5; i++){
    myfunction(); //function call in a loop
}

// function prevents us from redundancy
*/
//prameter-> input to the function
/*
function myfunction1(name) {
    console.log("hello " + name);
}

myfunction1("kartikay");*/
//functions to calculate the sum of the numbers
/*function sum(a,b){
    //a and b act as a loacal variable to the function sum
    c=a+b;
    return c;
    //after return the code is not reachable in a function
}

let val = sum(45,34);
console.log(val);

*/
//arrow function
/*const arrowsum = (a, b) => {
    console.log(a+b);
}

arrowsum(45, 34);*/

// arrow function of multiplication
/*
const arrowmultiply = (c,v) =>{
    return c*v;
}
const val = arrowmultiply(5, 4);
console.log(val);*/

/*function vowelfunction(str){
    let count = 0;
    for(let i = 0 ; i <str.length ; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count++;

        }

    }
    return count;
}
let name = prompt("Enter a string:");
console.log(vowelfunction(name));
//filter method - creates a new array that gives true for a condition/filter
// eg - all even  numbers from an array

let arr =[1,2,3,4,5,6,7,8,9,10];

let evenArray = arr.filter((val)=>{
    return val%2==0;
})
console.log(evenArray); 

//reduce method - reduces array to a single value

const arr = [1,2,3,4,5,6,7,8,9,10];
let output = arr.reduce((result , currentvalue) =>{
    return result + currentvalue
})
console.log(output); //55



// largest element in the array
let arr = [1,2,3,4,5,6,7,8,9,10];
let largest = arr.reduce((result , currentvalue)=>{
    return result > currentvalue ? result : currentvalue;
})
console.log(largest);


// find out the marks of the students which are above 90
let marks = [90,04,54,93, 100, 45, 67, 89, 99];
let above90 = marks.filter((val)=>{
    return val>90;

});
console.log(above90);

*/
let number = prompt("enter a number :");
let array = [];

for(let  i = 0 ; i < number ; i++){
    array[i] = i;
}
/*
console.log(array);

let sum = array.reduce((result , currentvalue)=>{
    return result + currentvalue;
})
console.log(sum);
*/
let  product = array.reduce((result , currentvalue)=>{
    return result * currentvalue;
})
console.log(product);