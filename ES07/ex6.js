
//multiplies all numeric properties of obj by 2. 
// before function call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu)
console.log(menu)

//multiplies all numeric properties of obj by 2. 
function multiplyNumeric(obj) {

  for (prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] *= 2
    }
  }

}