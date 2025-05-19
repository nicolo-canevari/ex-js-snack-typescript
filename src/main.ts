// La funzione accetta un valore di tipo generico (unknown), void è un tipo speciale che ci indica che una funzione non restituisce nulla (non ha "return")
function handleData(data: unknown): void {

  // BONUS: se il valore è "null"
  if (data === null) {
    console.log("Il dato è vuoto");

    // BONUS: se il valore è un array
  } else if (Array.isArray(data)) {
    console.log(`Array di lunghezza: ${data.length}`);

    // Se il valore è una stringa
  } else if (typeof data === 'string') {
    console.log(data.toUpperCase());

    // Se è un numero
  } else if (typeof data === 'number') {
    console.log(data * 2);

    // Se è un booleano
  } else if (typeof data === 'boolean') {
    console.log(data ? "Sì" : "No");

    // BONUS: se è una Promise
  } else if (data instanceof Promise) {

    // Aspetta che la Promise venga risolta
    data.then((resolvedValue) => {

      // Stampa il valore restituito dalla Promise
      console.log("Promise risolta con:", resolvedValue);
    }).catch((err) => {
      // In caso di errore nella Promise
      console.log("Errore nella Promise:", err);
    });

    // Tipo non gestito
  } else {
    console.log("Tipo non supportato");
  }

}

// Esempi di test
handleData("ciao");            // → CIAO
handleData(5);                 // → 10
handleData(true);              // → Sì
handleData(false);             // → No
handleData(null);              // → Il dato è vuoto
handleData([1, 2, 3]);         // → Array di lunghezza: 3
handleData(Promise.resolve("dato da API")); // → Promise risolta con: dato da API
handleData({});                // → Tipo non supportato
