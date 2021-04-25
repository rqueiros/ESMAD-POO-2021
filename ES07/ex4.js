
// Write the isEmpty(obj) function that returns true if the object has no properties
// and false otherwise 

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false


function isEmpty(obj) {
    for (prop in obj) {
        return false;
    }
    return true
}


// OR
isEmpty2 = (obj) => Object.keys(obj).length