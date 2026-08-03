//conditional statements
let age = 19;
console.log("if statement:");
 if (age >= 18) {
        console.log("You are an adult.");
    }
if (age < 18) {
        console.log("You are a minor.");
    }

//if-else statement
console.log("if-else statement:");
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
//if-else if-else statement

let score = 85;
console.log("if- else if -else statement:");
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


//turnary operator
let age1 = 20;
console.log("Ternary operator:");
let result = (age1 >= 18) ? "You are an adult." : "You are a minor.";
console.log(result);

//switch statement
let day = 9;
console.log("Switch statement:");
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}