/*
1.TRACCIA :

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
• il prezzo del biglietto è definito in base ai km (0.21 € al km)
• va applicato uno sconto del 20% per i minorenni
• va applicato uno sconto del 40% per gli over 65.
• L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
/* 
2.STRUMENTI : 

• PROMPT
• CONSOLE.LOG
• MATH
• IF/ELSE
• INNERHTML
*/

// 3. ESECUZIONE :

/* chiedo all'utente quanti km vuole percorrere e l'età,
   inizializzo due variabili e le mostro in console 
*/

const clientKm = Number(prompt("Inserisci il numero dei km che vuoi percorrere"));
const clientAge = Number(prompt("Inserisci la tua età"));
console.log(clientKm , clientAge);

/* calcolo il prezzo del biglietto 0.21€/km inizializzandolo in una variabile e lo mostro sia numerico (per accertarmi di avere un valore numerico) sia in stringa*/

const ticketPrice = (clientKm * 0.21);
console.log(ticketPrice);

/* calcolo gli sconti 20% under18 e 40% over65 e li applico al ticketPrice */

if (clientAge < 18) {
    const under18Sale = (ticketPrice * 20 / 100);
    console.log(under18Sale);
    const ticketUnder18 = (ticketPrice - under18Sale);
    console.log(`${ticketUnder18}€`);
} else if (clientAge > 65) {
    const over65Sale = (ticketPrice * 40 / 100);
    console.log(over65Sale)
    const ticketOver65 = (ticketPrice - over65Sale);
    console.log(`${ticketOver65}€`);
} else {
    console.log(`${ticketPrice}€`);
};



