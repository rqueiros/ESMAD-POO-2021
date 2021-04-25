
// Exercise 1

// a)
const countries = ['Portugal', 'Espanha', 'França']

// b)
//alert(countries[0])

// c)
//alert(countries[countries.length - 1])

// d)
countries.push('German')
// countries[countries.length] = 'German'

// e)
countries[3] = 'Germany'
//alert(countries[3])

// f)
//alert(`The array has ${countries.length} countries!`)

// g/h)
const countries2 = countries

// i)
countries2.push('Denmark')

// j)
alert(countries)

// k)
for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1} - ${countries[i]}`);
}

// l)
let i = 1
for (const country of countries) {
    console.log(`${i} - ${country}`);
    i++
}

// através do foreach
countries.forEach((country, pos) => {
    console.log(`${pos + 1} - ${country}`);
})




