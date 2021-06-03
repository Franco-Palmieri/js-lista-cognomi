var lista = ["Pagano", "Viscardi", "Coraggio"];
var cognome = prompt("inserisci cognome");

lista.push(cognome);
var position = lista.indexOf(cognome);

console.log(lista.sort() + position.sort())
