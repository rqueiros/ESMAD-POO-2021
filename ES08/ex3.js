// a) Create a numeric array called grades with OOP student grades (4,12,16,11,8)
const grades = [4, 12, 16, 11, 8]

// b) Print the first positive note of the array in an alert box

// usando o for...of
for (const grade of grades) {
    if (grade >= 10) {
        console.log(grade);
        break
    }
}

// usando o método find
console.log(grades.find(grade => grade >= 10));

// c) Create a getPositiveGrades function that should return an array with all the positive
// notes. Then print an alert box with the contents of that array.

function getPositiveGrades() {
    return grades.filter(grade => grade >= 10)
}

//alert(getPositiveGrades())


// d) Create a checkDisapprovals function that should return a logical value indicating
// whether negative notes exist or not. Print the result on the console.

function checkDisapprovals() {
    return grades.some(grade => grade < 10)
}
// alert(checkDisapprovals())

// e) Create a validateGrades function that should return a logical value indicating whether
// the notes in the array are valid. Valid grades are all grades between 0 and 20
// inclusive. Print the result on the console.

function validateGrades() {
    return grades.every(grade => grade >= 0 && grade <= 20)
}

alert(validateGrades())