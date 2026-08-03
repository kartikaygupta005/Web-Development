//foreach loop in array , it is a method of array which takes a function as an argument and executes the function for each element of the array
// it is a call back function
// call back function is a function which is passed as an argument to another function and is executed after the execution of the outer function
/*
let val = [1,2,3,4,5];

val.forEach(function printval(val){ // value at each index of array is passed as an argument to the function
    console.log(val); // prints the value at each index of array

}
)*/
/*
let cities = ["kanpur","lucknow","delhi","mumbai","kolkata"];
cities.forEach((city) => {
    console.log(city.toUpperCase());
});
*/
let num = [1,2,3,4,5];
let calculate_square = (num) => {
    console.log(num*num);
}
num.forEach(calculate_square);
