//strings
//strings are immutable sequences of characters used to represent text in JavaScript. They can be created using single quotes, double quotes, or backticks (template literals).
let str1 = "Hello";
let str2 = "World";
let str3 = "Hello World";

//string length
console.log(str1.length); //5

//string indices
console.log(str2[3],str2[4] );

//template literals 
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); //Hello, Alice!


//string interpolation
let age = 30;
let message = `I am ${age} years old.`;
console.log(message); //I am 30 years old.

//escaping characters
let quote = "She said \n hello!";
console.log(quote.length); //She said, "Hello!"


//string methods
let text = "JavaScript is awesome!     ";
console.log(text.toUpperCase()); //JAVASCRIPT IS AWESOME!
console.log(text.toLowerCase()); //javascript is awesome!
console.log(text.trim()); //JavaScript is awesome! //removes the space in start and end

//string slicing
let slicedText = text.slice(4, 12);
console.log(slicedText); //Script is

//string concatenation
let str4 = "Hello";
let str5 = "World";
let str6 = str4 + " " + str5;
console.log(str6); //Hello World
let str7 = str5.concat(str4);
console.log(str7); //WorldHello

//replacing strings
let text = "JavaScript is awesome!";
let replacedText = text.replace("awesome", "fantastic");
console.log(replacedText); //JavaScript is fantastic!

//charAt
let char = text.charAt(4);
console.log(char); //S