/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const vowelWord = (string) => {
  const vowel = "aeiou";

  let result = [];

  for (let i = 0; i < string.length; i++)
    if (vowel.includes(string[i])) {
      result.push(string[i]);
    }
  const vowelNumb = result.length;
  return (
    // string + "\n" + "Numero vocali:" + " " + vowelNumb + "\n" + result.join(",")
    ` ${string} \n Numero di vocali: ${vowelNumb} \n ${result.join(",")} `
  );
};

// Invoca la funzione qui e stampa il risultato in console
test = vowelWord(word);
console.log(test);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
