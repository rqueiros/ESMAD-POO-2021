let movies = []

document.querySelector('#txtYear').max = new Date().getFullYear()

document.querySelector('form').addEventListener('submit', function (event) {

    const txtTitle = document.querySelector('#txtTitle')
    const sltGenre = document.querySelector('#sltGenre')
    const txtYear = document.querySelector('#txtYear')
    const txtCover = document.querySelector('#txtCover')
    const txtTrailer = document.querySelector('#txtTrailer')

    if (movies.find(movie => movie.title == txtTitle.value)) {
        alert('Filme já existente!')
    } else {
        const newMovie = {
            title: txtTitle.value,
            genre: sltGenre.value,
            year: txtYear.value,
            cover: txtCover.value,
            trailer: txtTrailer.value
        }
        movies.push(newMovie)
        renderTable()
    }
    this.reset();
    event.preventDefault();
})


/**
 * Renderizar o array de filmes numa tabela (cada filme por linha)
 */
function renderTable() {
    const table = document.querySelector('table')

    // Inserir o cabeçalho
    table.innerHTML = `
        <tr>
            <th>TITULO</th>
            <th>GÉNERO</th>
            <th>OPÇÕES</th>
        </tr>
    `
    // Inserir as linhas iterando sobre o array de objetos
    for (const movie of movies) {
        table.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>
                    <button class='cover'>VER CAPA</button>
                    <button class='trailer'>VER TRAILER</button>
                    <button class='remove'>REMOVER</button>
                </td>
            </tr>
        `
    }

    // Adicionar listener para o botão 'VER CAPA'
    const covers = document.getElementsByClassName('cover')
    for (const cover of covers) {
        cover.addEventListener('click', function () {
            const title = this.parentNode.parentNode.cells[0].innerHTML
            const cover = movies.find(movie => movie.title == title).cover
            showDialogCover(cover)
        })
    }

    // Adicionar listener para o botão 'VER TRAILER'
    const trailers = document.getElementsByClassName('trailer')
    for (const trailer of trailers) {
        trailer.addEventListener('click', function () {
            const title = this.parentNode.parentNode.cells[0].innerHTML
            const trailer = movies.find(movie => movie.title == title).trailer
            showDialogTrailer(trailer)
        })
    }

    // Adicionar listener para o botão 'REMOVER'
    const removes = document.getElementsByClassName('remove')
    for (const remove of removes) {
        remove.addEventListener('click', function () {
            const title = this.parentNode.parentNode.cells[0].innerHTML
            movies = movies.filter(movie => movie.title != title)
            renderTable()
        })
    }
}

/**
 * Vai exibir a capa do filme através de uma modal
 * @param {string} cover URL da capa do filme
 */
function showDialogCover(cover) {
    const dlgCover = document.querySelector('#dlgCover')
    dlgCover.querySelector('img').src = cover
    dlgCover.showModal()
}


document.querySelector('#dlgCover button').addEventListener('click', function () {
    this.parentNode.close()
})

/**
 * Vai exibir o trailer do filme através de uma modal
 * @param {string} cover URL do trailer do filme
 */
function showDialogTrailer(trailer) {
    const dlgTrailer = document.querySelector('#dlgTrailer')
    dlgTrailer.querySelector('iframe').src = trailer
    dlgTrailer.showModal()
}

document.querySelector('#dlgTrailer button').addEventListener('click', function () {
    this.parentNode.close()
})
