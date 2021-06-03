var lista = ["Pagano", "Viscardi", "Coraggio"];
var cognome = prompt("inserisci cognome");
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
lista.push(cognome);

document.getElementById("result").innerHTML += lista.sort();

var position = lista.indexOf(cognome)+1;

document.getElementById("position").innerHTML = position;
