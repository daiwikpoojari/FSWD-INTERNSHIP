// Assignment of 28th Feb
let studentData = [
    { name: "Anand", marks: [80, 75, 90] },
    { name: "Bhargav", marks: [60, 70, 65] },
    { name: "Chandra", marks: [95, 88, 92] }
];

for (let i = 0; i < studentData.length; i++) {
    let student = studentData[i];
    let sum = 0;

    for (let j = 0; j < student.marks.length; j++) {
        sum += student.marks[j];
    }

    let average = sum / student.marks.length;
    console.log("Student Name: " + student.name + " | Average Marks: " + average.toFixed(2));
}