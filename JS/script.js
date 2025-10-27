// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// INPUT
let kmPercorrere;
do {
    kmPercorrere = prompt("Quanti km vuoi percorrere?");
    parseInt(kmPercorrere);
} while (kmPercorrere < 5 || kmPercorrere > 10000);

let etaUtente;
do {
    etaUtente = prompt("Quanti anni hai?");
    parseInt(etaUtente);
} while (etaUtente < 1 || etaUtente > 120);


// OPERAZIONI LOGICHE
let prezzo = kmPercorrere * 0.21;
let prezzoScontato;

if (etaUtente < 18) {
    let sconto = (prezzo * 20) / 100;
    prezzoScontato = prezzo - sconto;
} else if (etaUtente > 65) {
    let sconto = (prezzo * 40) / 100;
    prezzoScontato = prezzo - sconto;
} else {
    prezzoScontato = prezzo;
}
prezzoScontato.toFixed(2);

// OUTPUT
console.log(`Il prezzo del tuo biglietto è di ${prezzoScontato}$`);