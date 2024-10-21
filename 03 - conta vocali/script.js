/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const vowelWord = (string) => {
  const vowel = "aeiou";
  for (let i = 0; i < string.length; i++)
    if (vowel.includes(string[i])) {
      return string[i];
    }
};

test = vowelWord(word);
console.log(test);

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
