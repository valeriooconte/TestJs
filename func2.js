const prompt = require("prompt-sync")({sigint:true});

const LIBERO = 0;
const OCCUPATO = 1;

class Bagno {
    constructor(wc_status) {
        this.wc_status = wc_status;
    }

    get wcStatus() {
        return this.wc_status;
    }

    set wcStatus(status) {
        this.wc_status = status;
    }

    use_wc() {
        this.wcStatus = OCCUPATO;
    }

    free_wc() {
        this.wcStatus = LIBERO;
    }
}

let cesso = new Bagno(LIBERO);

console.log("Il bagno è libero");
let ans = prompt("Vuoi usare il bagno? (y/n)");

while (ans == 'y') {
    cesso.use_wc;
    console.log("Il bagno è ora occupato");
    ans = prompt("Ti serve ancora il bagno? (y/n)");
}

cesso.free_wc;
console.log("Il bagno è ora libero");


