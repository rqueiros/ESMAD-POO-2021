const form = document.querySelector('form')

// Evento submit do formulário
form.addEventListener('submit', function (event) {
    const txtName = document.querySelector('#txtName')
    const rdiCourse = document.querySelector('input[name="rdiCourse"]:checked')
    const sltProfile = document.querySelector('#sltProfile')
    const chkSessions = document.querySelectorAll('input[name="chkSession"]:checked')
    let sessions = ''

    if (chkSessions.length == 0) {
        alert('Deve selecionar pelo menos uma sessão!')
    } else {
        for (const session of chkSessions) {
            sessions += ` ${session.value}`
        }

        const table = document.querySelector('table')
        table.innerHTML += `
            <tr>
                <td>${txtName.value}</td>
                <td>${rdiCourse.value}</td>
                <td>${sltProfile.value}</td>
                <td>${sessions}</td>            
            </tr>
        `
        form.reset()
    }
    event.preventDefault()
})


// Se selecionar o item outro deve ser exibido um prompt para adicação de perfil à cabeça
const sltProfile = document.querySelector('#sltProfile')
sltProfile.addEventListener('change', function () {
    if (sltProfile.value == 'outro') {
        const newProfile = prompt('Digite um novo perfil?')
        sltProfile.innerHTML = `<option value="${newProfile}">${newProfile}</option>` + sltProfile.innerHTML
    }
})

// Evento clique do botão Contar
const btnCount = document.querySelector('input[type="button"]')
btnCount.addEventListener('click', function () {
    alert(`${document.querySelectorAll('tr').length - 1} utilizadores já registados!`)
})
