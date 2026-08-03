let marks = [85, 90, 78, 92, 88];
let total_marks  = 0;
for (let i = 0; i < marks.length; i++) {
    total_marks += marks[i];
}
let average_marks = total_marks / marks.length;
console.log(`Total Marks: ${total_marks}`);
console.log(`Average Marks: ${average_marks}`);