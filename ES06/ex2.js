
const sltColors = document.querySelector("#sltColors")


document.querySelector('#btnAdd').addEventListener('click', function () {
    const newColor = prompt("Digite uma nova cor?")
    sltColors.innerHTML += `<option value='${newColor}'>${newColor}</option>`
})


document.querySelector('#btnShow').addEventListener('click', function () {
    alert(document.querySelector('#sltColors').value)
})

document.querySelector('#btnRemove').addEventListener('click', function () {
    sltColors.remove(sltColors.selectedIndex);
})
