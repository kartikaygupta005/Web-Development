//arrays 
//arrays are used to store multiple values in a single variable.
//arrays are ordered, meaning that the values are stored in a specific order and can be accessed using their index.
//arrays are mutable, meaning that the values can be changed after they are created.
//arrays can contain any type of data, including numbers, strings, objects, and even other arrays.
let heroes = ["superman", "batman", "spiderman"];
console.log(heroes);
console.log(heroes.length);
console.log(typeof heroes); //object
heroes[2] = "ironman"; //changing the value of the 3rd element
console.log(heroes);

//arrays are mutable

//looping over array
for (let i = 0; i < heroes.length; i++) {
    console.log("position " + (i + 1) + ": " + heroes[i]);
}

//for off
for (const hero of heroes) {
    console.log(hero.toUpperCase());
}

//array methods
//push() - adds an element to the end of the array
heroes.push("hulk");
console.log(heroes);
//pop() - removes the last element from the array
heroes.pop();
console.log(heroes);

//unshift() - adds an element to the beginning of the array
heroes.unshift("deadpool");
console.log(heroes);

//shift() - removes the first element from the array
heroes.shift();
console.log(heroes);

//concat() - combines two or more arrays
let villains = ["joker", "lex luthor", "green goblin"];

let heroes_and_villains = heroes.concat(villains);

console.log(heroes_and_villains);

let value = heroes.shift();
console.log(value);3
