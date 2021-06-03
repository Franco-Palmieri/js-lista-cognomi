var lista = ["Pagano", "Monti", "Coraggio"]

while (lista.length < 4) {
    lista.push(prompt("inserisci cognome"));
}
document.getElementById("result").innerHTML = lista.sort();