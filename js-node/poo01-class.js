class Televisao {
    constructor() {
        this.marca = "LG";
        this.volume = 0;
    }

    aumentarVolume() {
        if (this.volume < 10) {
            this.volume += 1;
        } else {
            console.log(`O volume está no máximo (${this.volume})`);
        }     
    }

    diminuirVolume() {
        if (this.volume > 0) {
            this.volume -= 1;
        } else {
            console.log(`O volume está no mínimo (${this.volume})`);
        }
    }
}

const tv = new Televisao();

tv.aumentarVolume()
console.log(`Volume da TV: ${tv.volume}`);
tv.diminuirVolume()
console.log(`Volume da TV: ${tv.volume}`);