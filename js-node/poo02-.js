class Abajur {
    constructor() {
        this.#intensidade = 0;
        this.#lampada = false;
    }

    #liga_desliga_lampada() {
        if (this.#intensidade == 0) {
            this.#lampada = false;
        } else {
            this.#lampada = true;
        }
    }

    #controla_intensidade() {
        this.#intensidade += 1;
        if (this.#intensidade == 4) {
            this.#intensidade = 0;
        }
    }

    tocar_botao(input) {
        if (input == 0) {
            return true;
        } else {
            return false;
        }
    }

    mostrar_status() {
        console.log(`Intensidade: ${this.#intensidade} / Lamapda: ${this.#lampada}`);
    }
}

const abajur = new Abajur();

abajur.tocar_botão(0);
abajur.mostrar_status();