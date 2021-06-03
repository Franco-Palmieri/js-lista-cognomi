var lista = ["Pagano", "Viscardi", "Coraggio"];
var cognome = prompt("inserisci cognome");

lista.push(cognome);

document.getElementById("result").innerHTML += lista.sort();

var position = lista.indexOf(cognome)+1;

document.getElementById("position").innerHTML = position;
