var lista = ["Pagano", "Monti", "Coraggio"];
var cognome = prompt("inserisci cognome");
var x = lista.indexOf(cognome);

while (lista.length < 4) {
    lista.push(cognome);
}
document.getElementById("result").innerHTML = lista.sort() + x;