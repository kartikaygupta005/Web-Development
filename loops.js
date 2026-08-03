console.log("Loops in JavaScript");
// For Loop
let loops = prompt("Enter the number of iterations for the  for loop:");
for (let i = 0; i < loops; i++) {
    console.log("loop number " + i);
}
let sum = 0;
for (let i = 0; i < loops; i++) {
    sum += i;
}
console.log("Sum of iterations: " + sum);

 //while Loop

let count = 0;
let loopss = prompt("Enter the number of iterations for the while loop:");
while (count < loopss) {
    console.log("while Loop Iteration: " + count);
    count++;
}
//do while Loop
let i = 0;
let loopsss = prompt("Enter the number of iterations for the do while loop:");
do {
    console.log("number of times do loop is executed: " + i);
    i++;
} while (i < loopsss);

//for of Loop used to iterate over iterable objects like arrays, strings, maps, sets, etc.
let fruits = "apple";
let size=0;
for (let i of fruits) {
    console.log("for of loop: " + i);
    size++;
    
}
console.log("size of string: " + size);