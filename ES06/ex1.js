const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    const txtName = document.querySelector('#txtName')
    const txtLocation = document.querySelector('#txtLocation')

    const table = document.querySelector('table')
    table.innerHTML += `
        <tr>
            <td>${txtName.value}</td>
            <td>${txtLocation.value}</td>
        </tr>
    `
    event.preventDefault()
})

document.querySelector('input[type="button"]').addEventListener('click', function () {
    const row = prompt("Digite o número da linha a editar?")
    const col = prompt("Digite o número da coluna a editar?")
    const editCell = document.querySelector('table').rows[row].cells[col - 1]
    editCell.innerHTML = prompt('Digite o novo conteúdo da célula?', editCell.innerHTML)
})

