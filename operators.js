//comments
/*multiline
comment*/
console.log("hello world"); 
// arithmetic operators +,-,*,/
let a = 10;
let b = 20;
console.log("a+b:",(a + b));   
console.log("a-b:",(a - b));
console.log("a*b:",(a * b));
console.log("a/b:",(a / b));

//modulus operator % (remainder operator)
console.log("a%b:",(a % b));

//exponentiation operator **
console.log("a**b:",(a ** b));

//unary operators
//increment operator ++
let c = 10;
console.log("c++:",(c++)); //post increment
console.log("++c:",(++c)); //pre increment
//decrement operator --
let d = 10;
console.log("d--:",(d--)); //post decrement
console.log("--d:",(--d)); //pre decrement
//assignment operators = , +=, -=, *=, /=, %=
let e = 10;
e+=2;
console.log("e=",e);

//comparison operators ==, ===, !=, !==, >, <, >=, <=
const f = "10";
const g = 10;
console.log("f==g:",(f == g)); //boolean value true or false
console.log("f===g:",(f === g)); //strict equality it checks both value and type
console.log("f!=g:",(f != g));//not equal to
console.log("f!==g:",(f !== g));   //strict not equal to it checks both value and type
console.log("f>g:",(f > g)); //greater than
console.log("f<g:",(f < g));//less than
console.log("f>=g:",(f >= g));//greater than or equal to
console.log("f<=g:",(f <= g));//less than or equal to

//logical operators &&, ||, !
const h = true;
const i = false;
console.log("h && i:",(h && i)); //logical AND
console.log("h || i:",(h || i)); //logical OR
console.log("!h:",(!h)); //logical NOT 