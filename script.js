var lista = ["Pagano", "Viscardi", "Coraggio"];
var cognome = prompt("inserisci cognome");
var position = lista.indexOf(cognome);

while (lista.length < 4) {
    lista.push(cognome);
}

document.getElementById("result").innerHTML = lista.sort();

