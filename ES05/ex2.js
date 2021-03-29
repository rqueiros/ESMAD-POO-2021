const frmGame = document.querySelector('form');

frmGame.addEventListener('submit', function (event) {
    const year = document.querySelector('#txtYear').value;

    if (year <= 1950 || year > new Date().getFullYear()) {
        alert('Erro!');
    } else {
        alert('Validação OK!');

        const table = document.querySelector('table');
        const txtName = document.querySelector('#txtName').value;
        const txtYear = document.querySelector('#txtYear').value;
        const sltGenre = document.querySelector('#sltGenre').value;
        const txtCover = document.querySelector('#txtCover').value;

        table.innerHTML += `
            <tr>
                <td>${txtName}</td>
                <td>${txtYear}</td>
                <td>${sltGenre}</td>
                <td>${txtCover}</td>
                <td><input type="button" value="x"></td>
            </tr>
        `;

        const inputs = document.querySelectorAll('input[type="button"]')
        for (const input of inputs) {
            input.addEventListener('click', function () {
                this.parentNode.parentNode.remove()
            })
        }


    }
    event.preventDefault();
});