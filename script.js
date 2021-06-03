var lista = ["Pagano", "Viscardi", "Coraggio"];
var cognome = prompt("inserisci cognome");

lista.push(cognome);


console.log(lista.sort())
console.log(lista.toString())

for (x = 1; x < lista.length; x++){
    var position = lista.indexOf(cognome);
}
console.log(position)
