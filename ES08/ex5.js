// a) Create the next object literal:
const grades = [
    { name: 'Peter', grade: 8 },
    { name: 'Ann', grade: 12 },
    { name: 'Mary', grade: 14 }
]


// b) Create a function that creates a new object (with user data) and insert them into the array

//const name = prompt("What's your name?")
//const grade = +prompt("What's your grade?")

//addGrade(name, grade)

//console.log(grades);

function addGrade(name, grade) {
    const newGrade = {
        name: name,
        grade: grade
    }
    grades.push(newGrade)

    // alternativa    
    //grades.push({ name, grade })
}


// c) Create a function that calculates the average of the OOP grades

//console.log(getAverageGrades2());

function getAverageGrades() {
    let sum = 0
    for (const grade of grades) {
        sum += grade.grade
    }
    return sum / grades.length
}

// alternativa
function getAverageGrades2() {
    return grades.reduce((sum, grade) => sum + grade.grade, 0) / grades.length
}

// d) Create function that lists the names of students with a positive grade
function listStudentNamesPositiveGrades() {
    return grades.filter(
        grade => grade.grade >= 10
    ).map(grade => grade.name).join()
}

console.log(listStudentNamesPositiveGrades());