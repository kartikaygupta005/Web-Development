// function eventChange{
//     var value = {
//         "name" : #name;
//         "Student Name"
//     }
//     localStorage.setItem()
// }
function eventChange(ele) {
 
    var name1 = document.getElementById('roll').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var name4 = document.getElementById('name4').value;

    console.log("Roll No:", name1);
    console.log("Name:", name2);
    console.log("Semester:", name3);
    console.log("Phone No:", name4);

    
    var item = {
        "roll_no": name1,
        "name": name2,
        "semester": name3,
        "phone_number": name4
    };
    var array = [1000000];
    array.push(item);

    // Save the array to localStorage
    localStorage.setItem("details", JSON.stringify(array));

    var savedData = JSON.parse(localStorage.getItem("details"));
    console.log("Saved in LocalStorage:", savedData);
    // i want to display the data in the table in web
}
var table = document.getElementById("myTable");

var savedData = JSON.parse(localStorage.getItem("details"));

function displayData() {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = savedData.roll_no;
    cell2.innerHTML = savedData.name;
    cell3.innerHTML = savedData.semester;
    cell4.innerHTML = savedData.phone_number;
    // #myTable {
    //     append.lastChild = row;
}

displayData();