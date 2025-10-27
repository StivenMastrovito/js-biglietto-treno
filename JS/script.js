// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// INPUT
const kmPercorrere = prompt("Quanti km vuoi percorrere?");
parseInt(kmPercorrere);

const etaUtente = prompt("Quanti anni hai?");
parseInt(etaUtente);

// OPERAZIONI LOGICHE
let prezzo = kmPercorrere * 0.21;
let prezzoScontato;

if (etaUtente < 18){
    let sconto = (prezzo * 20) / 100;    
    prezzoScontato = prezzo - sconto;
}else if ( etaUtente > 65){
    let sconto = (prezzo * 40) / 100;    
    prezzoScontato = prezzo - sconto;
}else{
    prezzoScontato = prezzo;
}

// OUTPUT
prezzoScontato.toFixed(2);
console.log(`Il prezzo del tuo biglietto è di ${prezzoScontato}$`);