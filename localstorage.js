// type of database stored as key value pair, stored till deleted by us
//session storage - data is help only till when the session is open (till we don't close the page)
//auto save should be off because it might sotr two values when we change something by accident
//key : value pair 
localStorage.setItem("kg", "FSD");
localStorage.removeItem('kg');
var value = localStorage.getItem('kartikay')
console.log(value);
var item = {
    "name" : "abhinav",
    "class" : "ece",
    "section" : "A",
    "surname" : "singh"
}
// item is a data in the form of object in key value pair 
//json.parse is ised to convert a data(string) in object or array form
//json.stringify it is used to convert he object in the javascipt into string format ;
localStorage.setItem('ary' , JSON.stringify(item));
// JSON.stringify

var items = []
items.push(JSON.parse(localStorage.getItem('ary')));
console.log(items);

var len = items.length ;
items.forEach((value, index) =>{
    console.log(value.name);
    console.log(value.class);
    console.log(value.section);

})