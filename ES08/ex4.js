// a) Create a numeric array called ages with the age of alDisplay game information on the
// consolel members of a family (1, 9, 41, 75, 44, 73)

const ages = [1, 9, 41, 75, 44, 73]

// b) Create a new array called fiveYearsFromNowAges with the family ages 5 years from
// now. Print the array in an alert box

const fiveYearsFromNowAges = ages.map(age => age + 5)
//alert(fiveYearsFromNowAges)

// c) Print the sum of all ages on the console
/* let sum = 0
for (const age of ages) {
    sum += age
}
console.log(sum)

console.log(ages.reduce((sum, age) => sum + age, 0)); */

// d) Print the average of all ages on the console
let sum = 0
for (const age of ages) {
    sum += age
}
//console.log(sum / ages.length)

//console.log(ages.reduce((sum, age) => sum + age, 0) / ages.length);

// e) Create a new array called adults with ages under 18 transformed into “-” and the rest unchanged

// alternativa 1
const adults = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        adults.push('-')
    } else {
        adults.push(ages[i])
    }
}
// console.log(adults);

// alternativa 2
const adults2 = ages.map(
    age => {
        if (age < 18) {
            return '-'
        } else {
            return age
        }
    }
)

// console.log(adults2)

// alternativa 3
// console.log(ages.map(age => age < 18 ? '-' : age))

// f) Order the age array and present the result in an alert box

function orderByNum(num1, num2) {
    if (num1 > num2) return 1;
    if (num1 == num2) return 0;
    if (num1 < num2) return -1;
}

console.log(ages.sort(orderByNum));

// g) Invert the result of the previous paragraph and save it in a new array called inverseOrderedAges

const inverseOrderedAges = ages.sort(orderByNum).reverse()
console.log(inverseOrderedAges);