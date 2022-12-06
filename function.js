const prompt = require("prompt-sync")({sigint:true});

function welcome(n) {
    console.log("Benvenuto " + n);
}

function sqrt() {
    console.log("Posso calcolare la radice quadrata di un quadrato perfetto")
    let x = prompt("Inserisci il numero: ");
    let i, j;
    let risposta;
    
    for(i = 0; risposta != x; i++) {
        risposta = i*i;
        j = i;
    }

    console.log("La radice quadrata di " + x + " è: " + j);
}

function somma(a, b) {
    let x = a + b;
    return x;
}

let name = prompt('Inserisci il tuo nome: ');

welcome(name);

sqrt();


let w = parseInt(prompt("inserisci w: "));
let z = parseInt(prompt("inserisci z: "));

let sum = somma(w, z);
//L'alternativa sarebbe stata il casting dei caratteri w e z attraverso Number()

console.log("la somma di w e z è: " + sum);

//variabili globali e locali
//se assegniamo c all'interno della funzione, sarà automaticamente considerata una variabile globale
//let c = " "

function prova() {
    let a = 'hello';
    a += ' world';

    c = "variabile globale";
    return a;
}

console.log(prova());
console.log(c);