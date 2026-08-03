var result =  document.getElementById("myid");
var res =  document.getElementById("show");
/*console.log(result.lastChild);
document.write(result.firstChild.textContent);
console.log(res.lastChild);
console.log(res.lastElementChild);
//siblings in dom
console.log(result.nextSibling);
console.log(result.nextElementSibling)
//parent node  and parent element
console.log(result.parentNode);
console.log(result.parentElement);
console.log(result.attributes[0]);
console.log(result.attributes[0].nodeName);
console.log(result.attributes[0].nodeValue);

console.log(result.attributes[1]);
console.log(result.attributes[1].nodeName);
console.log(result.attributes[1].nodeValue);
const len = result.attributes.length;
for (let i = 0; i < len; i++) {
    console.log(result.attributes[i].nodeName);
    console.log(result.attributes[i].nodeValue);
    document.write(result.attributes[i].nodeName + ":" + result.attributes[i].nodeValue + "<br>");
}
    

const newNode =  document.createElement("h3");
console.log(newNode);
const textNode =  document.createElement("this is a new text node created by java");
//set attribute can change value of the class
let lastchildd = document.getElementById("myid").lastChild;
console.log(lastchildd);

var lastchild = document.getElementById("myid").lastElementChild;
console.log(lastchild.previousSibling);
console.log(lastchild.nextSibling);
console.log(lastchild.nextElementSibling);
console.log(lastchild.previousElementSibling);

var lastchild = document.getElementById("myid").lastChild;
console.log(lastchild.previousSibling);
console.log(lastchild.nextSibling);
console.log(lastchild.nextElementSibling);
console.log(lastchild.previousElementSibling);

var newNode = document.createElement("span");
newNode.textContent = "this is a span tag created in javascript"
console.log(newNode);

var newComment = document.createComment("this is a comment");
console.log(newComment);

var newTextNode =document.createTextNode("this is a text node created in the javascript");
console.log(newTextNode);

result.appendChild(newNode);
result.appendChild(newComment);
result.appendChild(newTextNode);
console.log(result);  

var mydiv = document.getElementById("para");
console.log(mydiv);
var mydiv2 = document.getElementsByTagName("div");
console.log(mydiv2);

var target = mydiv[0].firstElementChild;
result.append(target);
console.log(target);

var newNode = document.createElement("span");
newNode.textContent = "this is a span tag created in javascript"
console.log(newNode);

var newComment = document.createComment("this is a comment");
console.log(newComment);

var newTextNode =document.createTextNode("this is a text node created in the javascript");
console.log(newTextNode);

var refNode = document.getElementsByTagName("span");
result.insertBefore(newNode, refNode[0]);
console.log(result);
//insert before (parenValue , redfrenceNode[] )
*/

//newNodep.textContent = "this is a parahraph created in javascript in headin3 ";
// console.log(newNodep);
// var one = document.getElementById("myclass");
// one.insertAdjacentElement('beforebegin', newNodep );
// console.log(document.querySelector("body"));

// var afterBegin1  = document.createElement("p");
// afterBegin1.textContent = "this is a parahraph created in javascript in headin3 need to be added after ther div ";
// console.log(afterBegin1);
// var one = document.getElementById("myclass");
// one.insertAdjacentElement('afterbegin', afterBegin1 );
// console.log(document.querySelector("body"));


var one = document.getElementById("myclass");
one.innerHTML="<br>this is a parahraph created in javascript in headin3 need to be added after ther div <br> <span> this is a span tag created in insertHTML</span> ";
console.log(one.innerHTML);