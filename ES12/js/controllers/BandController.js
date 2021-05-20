import BandModel from '../models/BandModel.js'

export default class BandController {
    constructor() {
        this.bands = localStorage.bands ? JSON.parse(localStorage.bands) : [];
        this.currentBand = sessionStorage.band ? sessionStorage.band : null

    }

    create(name, genre, photo, description, video) {
        if (!this.bands.some(band => band.name === name)) {
            this.bands.push(new BandModel(name, genre, photo, description, video));
            localStorage.setItem('bands', JSON.stringify(this.bands))
        } else {
            throw Error(`Band with name "${name}" already exists!`);
        }
    }

    remove(name) {
        this.bands = this.bands.filter(band => band.name != name)
        localStorage.setItem('bands', JSON.stringify(this.bands))
    }

    setCurrentBand(name) {
        this.currentBand = name
        sessionStorage.setItem("band", name);
    }

    getCurrentBand() {
        return this.bands.find(band => band.name == this.currentBand)
    }

    getBands(filterName = '', filterGenre = '', isSorted = false) {
        let filteredBands = this.bands.filter(
            band =>
                (band.name.toLowerCase().includes(filterName.toLowerCase()) || filterName === '')
                &&
                (band.genre == filterGenre || filterGenre === '')
        )

        filteredBands = isSorted ? filteredBands.sort(this.#compare) : filteredBands

        return filteredBands
    }

    #compare(bandA, bandB) {
        if (bandA.name > bandB.name)
            return 1;
        if (bandA.name < bandB.name)
            return -1;
        return 0;
    }

}
