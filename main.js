console.log('Hello World!');

//Dichiarazione e assegnazione delle variabili si usa "let" oppure "var"
var x = 5;
let y = 7;

let prod;
prod = x * y;
console.log(prod);

//preferibile usare let, dichiara anch'esso una variabile -> non è la dichiarazione di una costante!

y = 16;
console.log(y);

//le variabili possono iniziare per lettera, underscore o segno del dollaro, ma non per numero
//javascript è case sensitive, cioè variabili chiamate con la stessa lettera ma in minuscolo e maiuscolo sono differenti

let a = 'hello';
let A = 23;

console.log(a); 
console.log(A);

//non possono essere utilizzate keywords come nomi di variabili

//Dichiarazioni di costanti: si usa const
//Una costante non potrà essere modificata una volta effettuata l'assegnazione
//Una costante non può essere dichiarata senza che gli venga assegnato un valore!
const c = 32;

//Stampiamo valori assegnati a variabili/costanti
const nome = 'Valerio Domenico';
const cognome = 'Conte';

console.log('Mi chiamo: ' + nome + ' ' + cognome);

//Le stringhe sono contenute indifferentemente in '' o in ""
//Nel caso di string interpolation usiamo le backticks ``(option + 9)
//Per l'interpolation si pone la variabile in ${}
let string_interpolation = `Il mio nome è ${nome} mentre il mio cognome è ${cognome}`;

console.log(string_interpolation);

//Creazione di un oggetto

let studente = {
    n: 'Paolo',
    c: 'Rossi',
    age: null
};

studente.age = 21;

console.log(studente.n + ' ' + studente.c + ', ' + studente.age);