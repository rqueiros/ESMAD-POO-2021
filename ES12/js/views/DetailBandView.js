import BandController from '../controllers/BandController.js'

export default class DetailBandView {

    constructor() {
        this.bandController = new BandController()

        // Gestão dos detalhes da banda
        this.bandName = document.querySelector('#bandName')
        this.bandGenre = document.querySelector('#bandGenre')
        this.bandDescription = document.querySelector('#bandDescription')
        this.bandPhoto = document.querySelector('#bandPhoto')
        this.btnBack = document.querySelector("#btnBack")

        this.fillBandData()
        this.bindBackButton()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            history.back();
        })
    }

    fillBandData() {
        const currentBand = this.bandController.getCurrentBand()
        this.bandName.innerHTML = currentBand.name
        this.bandGenre.innerHTML = currentBand.genre
        this.bandDescription.innerHTML = currentBand.description
        this.bandPhoto.src = currentBand.photo
    }

}
