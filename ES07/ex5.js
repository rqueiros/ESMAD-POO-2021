
// Write the code, to sum up, all wages and store it in the sum variable. It should be 390 in the example above. 
// If the salaries object is empty, the result must be 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = getSumSalaries()
alert(sum)


function getSumSalaries() {
  let sum = 0
  for (prop in salaries) {
    sum += +salaries[prop]
  }
  return sum
}