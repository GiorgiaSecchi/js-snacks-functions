/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

const getInitials = (array) => {
  // variabile array vuoto in cui si aggiungeranno le iniziali
  let initials = [];
  // ciclo per scorrere la lunghezza dell'array
  for (let i = 0; i < array.length; i++) {
    // aggiungere alla variabile "initials" le prime lettere di ogni elemento nell'array
    initials.push(array[i][0]);
  }
  return initials;
};

// Invoca la funzione qui e stampa il risultato in console

const initials = getInitials(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
