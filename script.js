// var lista = ["Pagano", "Viscardi", "Coraggio"];
// var cognome = prompt("inserisci cognome");

// lista.push(cognome);


// console.log(lista.sort())
// console.log(lista.toString())

// for (x = 1; x <= 4; x++){
//     var position = lista.indexOf(cognome);
// }
// console.log(position)

var lista = [];
lista[1] = "Pagano"
lista[2] = "Viscardi"
lista[3] = "Coraggio"
var cognome = prompt("Inserisci Cognome")

lista.push(cognome)
var position = lista.indexOf(cognome)
console.log(lista.sort());