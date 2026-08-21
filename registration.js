// var name = document.getElementById("name"); // Added quotes
// var studentClass = document.getElementById("chooseClass"); // Changed 'class' variable name
// var section = document.getElementById("section");
// alert(name);
// alert(section);
//alert(name);
function eventchange(ele) {
    var classList = {
        "12": "12th class",
        "11": "11th class",
        "10": "10th class",
        "9": "9th class",
        "8": "8th class"
    };

    var name = document.getElementById("namee");
    var classes = document.getElementById("chooseClass");
    var selectedClass = classList[classes.value];

    if (name.value.trim() === "") {
        alert("no name");
        alert(selectedClass);  
    }
}
