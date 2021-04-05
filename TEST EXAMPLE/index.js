const form = document.querySelector('form')
form.addEventListener('submit', function (event) {

    const txtName = document.querySelector('#txtName')
    const sltCategory = document.querySelector('#sltCategory')
    const txtQuantity = document.querySelector('#txtQuantity')

    const table = document.querySelector('table')

    if (!existProduct(txtName.value)) {
        table.innerHTML += `
        <tr class='product'>
            <td>${txtName.value}</td>
            <td>${sltCategory.value}</td>
            <td>${txtQuantity.value}</td>
            <td>
                <button class='minus'>-</button>
                <button class='plus'>+</button>
            </td>
        </tr>
    `
    } else {
        updateProductQuantity(txtName.value, txtQuantity.value)
    }

    // Definir o event listener para o botão +
    const plusButtons = document.querySelectorAll('.plus')
    for (const plusButton of plusButtons) {
        plusButton.addEventListener('click', function () {
            this.parentNode.parentNode.cells[2].innerHTML = +this.parentNode.parentNode.cells[2].innerHTML + 1
            // Alternativa: this.parentNode.previousSibling.innerHTML = +this.parentNode.previousSibling.innerHTML + 1
        })
    }

    // Definir o event listener para o botão -
    const minusButtons = document.querySelectorAll('.minus')
    for (const minusButton of minusButtons) {
        minusButton.addEventListener('click', function () {
            if (this.parentNode.parentNode.cells[2].innerHTML == '1') {
                this.parentNode.parentNode.remove()
            } else {
                this.parentNode.parentNode.cells[2].innerHTML = +this.parentNode.parentNode.cells[2].innerHTML - 1
            }

            //this.parentNode.previousSibling.innerHTML = +this.parentNode.previousSibling.innerHTML + 1
        })
    }
    event.preventDefault()
})

// Definir o event listener para o botão CONTAR PRODUTOS
const btnCountProducts = document.querySelector('#btnCountProducts')
btnCountProducts.addEventListener('click', function () {
    const lines = document.querySelectorAll('tr').length - 1
    const msg = `A lista de compras tem ${lines} produtos`
    alert(msg)
})

// Definir o event listener para o botão CONTAR PRODUTOS POR CATEGORIA
const btnCountProductsByCategory = document.querySelector('#btnCountProductsByCategory')
btnCountProductsByCategory.addEventListener('click', function () {
    let count = 0
    const category = prompt('Qual a categoria dos produtos a contar?')
    const trs = document.querySelectorAll('tr')
    for (const tr of trs) {
        if (tr.cells[1].innerHTML == category) {
            count++
        }
    }
    const msg = `A lista de compras tem ${count} produtos da categoria ${category} a comprar.`
    alert(msg)
})

// Definir o event listener para o botão REMOVER LISTA
const btnRemoveList = document.querySelector('#btnRemoveList')
btnRemoveList.addEventListener('click', function () {
    if (confirm('Deseja mesmo apagar a sua lista de compras?')) {
        const trs = document.querySelectorAll('.product')
        for (const tr of trs) {
            tr.remove()
        }
    }
})



/**
 * Função que dado um nome de um produto verifica se este existe já na lista a comprar
 * @param {string} product o nome do produto a verificar
 * @returns true caso o produto exista; false caso contrário
 */
function existProduct(product) {
    let result = false

    const trs = document.querySelectorAll('tr')
    for (const tr of trs) {
        if (tr.cells[0].innerHTML == product) {

            result = true
            break
        }
    }
    return result
}


/**
 * 
 * @param {string} product nome do produto 
 * @param {number} quantity quantidade do produto a atualizar
 */
function updateProductQuantity(product, quantity) {
    const trs = document.querySelectorAll('tr')
    for (const tr of trs) {
        if (tr.cells[0].innerHTML == product) {
            tr.cells[2].innerHTML = +tr.cells[2].innerHTML + +quantity
            break
        }
    }
}