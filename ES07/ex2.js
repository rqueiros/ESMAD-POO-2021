const student = {
    name: "John Doe",
    course: "POO",
    grade: 12
}

//showObjectProperties();
//removeProperty('grade');
//lengthObject();

//  a.	Create a function to list the names of the object properties
function showObjectProperties() {

    text = ''
    for (let prop in student) {
        text += `${prop} `
    }
    console.log(text)
    //alert(text)
}

//  b.	Create a function that removes the object's grid property. Print the object before and after removing the property
function removeProperty(feature) {

    console.log(student)
    delete student[feature]
    console.log(student)
}
//  c.	Create a function that calculates the size of the object (number of the propertie of an object)
function lengthObject() {
    cont = 0
    for (let prop in student) { cont += 1 }
    alert(`o objeto student contém ${cont} propriedades`)

    // OR -> Object.keys(student).length
}