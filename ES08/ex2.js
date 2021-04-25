// a) Create an empty array names
const names = []

// b) Include a text box and an “ADD NAME” button on the web page. By pressing the
// button, you must add the contents of the text box to the array and print the contents
// of the array to the console
document.querySelector('button').addEventListener('click', function () {
    const txtName = document.querySelector('input')
    names.push(txtName.value)
    console.log(names);
})

// c) Add 5 names (“John”, “Peter”, “Mary”, “Ann”, “Michael”)
names.push('John', 'Peter', 'Mary', 'Ann', 'Michael')

// d) Extract the last name from the array and display it in an alert box
//const lastName = names.pop()
//alert(lastName)
//alert(names)

// e) Extract the first name of the array and display it in an alert box
//const firstName = names.shift()
//alert(firstName)
//alert(names)

// f) Create a second array called names2 with the elements: “Charles”, “Paul”
const names2 = ['Charles', 'Paul']

// g) Join both arrays in a new array called allNames and show it on the console
//const allNames = names.concat(names2)
//console.log(allNames);

// h) Solve the previous question using spread syntax
const allNames = [...names, ...names2]
console.log(allNames);
