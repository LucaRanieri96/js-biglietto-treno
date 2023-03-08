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
   inizializzo due variabili e le mostro in console */

const clientKm = prompt("Inserisci il numero dei km che vuoi percorrere");
const clientAge = prompt("Inserisci la tua età");
console.log(clientKm , clientAge);

