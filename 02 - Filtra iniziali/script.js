/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const arrayFilter = (word, letter) => {
  return word.filter((word) => word.startsWith(letter));
};

// Invoca la funzione qui e stampa il risultato in console
newArray = arrayFilter(names, "A");
console.log(newArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
