import BandController from '../controllers/BandController.js'
import UserController from '../controllers/UserController.js'

export default class NewBandView {
    constructor() {
        this.bandController = new BandController();
        this.userController = new UserController();

        // Gestão do formulário de adição de banda
        this.userLoggedOutContent = document.getElementById('userLoggedOutContent');
        this.userLoggedInContent = document.getElementById('userLoggedInContent');
        this.newBandForm = document.getElementById('frmNewBand');
        this.bandName = document.getElementById('txtName');
        this.bandGenre = document.getElementById('sltGenre');
        this.bandPhoto = document.getElementById('txtPhoto');
        this.bandDescription = document.getElementById('txtDescription');
        this.bandVideo = document.getElementById('txtVideo');
        this.newBandMessage = document.getElementById('newBandMessage');

        // Gere a visulização do conteúdo da página tendo em conta se o user está ou não autenticado 
        this.renderAddBandForm();

    }

    renderAddBandForm() {
        if (this.userController.isLogged()) {
            this.userLoggedOutContent.style.visibility = 'hidden';
            this.userLoggedInContent.style.visibility = 'visible';
            this.bindNewBandForm()
        } else {
            this.userLoggedOutContent.style.visibility = 'visible';
            this.userLoggedInContent.style.visibility = 'hidden';
        }
    }

    bindNewBandForm() {
        this.newBandForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.bandController.create(
                    this.bandName.value,
                    this.bandGenre.value,
                    this.bandPhoto.value,
                    this.bandDescription.value,
                    this.bandVideo.value
                );
                this.displayMessage('Band added with success!', 'success');

                // Espera 1 seg. antes de fazer refresh à pagina
                // Assim o utilizador pode ver a mensagem na modal antes de a mesma se fechar
                setTimeout(() => { location.href = "../index.html" }, 1000);
            } catch (err) {
                this.displayMessage(err, 'danger');
            }
        });
    }

    displayMessage(message, type) {
        this.newBandMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}
