// SNACK 1

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


// SNACK 2

// Type alias per rappresentare un dipendente
type Dipendente = {
  nome: string;                     // Nome del dipendente
  cognome: string;                 // Cognome del dipendente
  annoNascita: number;             // Anno di nascita
  sesso: "m" | "f";                // Sesso: solo 'm' o 'f'
  anniDiServizio: number[];       // Array con gli anni di servizio

  // BONUS:
  readonly emailAziendale: string;           // Email non modificabile
  contratto: "indeterminato" | "determinato" | "freelance"; // Tipo contratto
};

// Funzione che riceve un oggetto di tipo Dipendente e stampa tutte le sue informazioni, void è un tipo speciale che ci indica che una funzione non restituisce nulla (non ha "return")
function stampaDipendente(d: Dipendente): void {

  // Stampa il nome completo (nome + cognome)
  console.log(`Nome: ${d.nome} ${d.cognome}`);

  // Stampa l'anno di nascita del dipendente
  console.log(`Anno di nascita: ${d.annoNascita}`);

  // Stampa il sesso, che può essere solo 'm' o 'f'
  console.log(`Sesso: ${d.sesso}`);

  // Stampa tutti gli anni di servizio come stringa separata da virgole
  console.log(`Anni di servizio: ${d.anniDiServizio.join(', ')}`);

  // Stampa l'email aziendale, che è readonly e non modificabile
  console.log(`Email aziendale: ${d.emailAziendale}`);

  // Stampa il tipo di contratto, uno dei valori possibili: 'indeterminato', 'determinato', 'freelance'
  console.log(`Tipo di contratto: ${d.contratto}`);

}

// Creazione di un esempio di oggetto Dipendente chiamato "mario"
const mario: Dipendente = {
  nome: "Mario",                        // Nome del dipendente
  cognome: "Rossi",                    // Cognome del dipendente
  annoNascita: 1985,                   // Anno di nascita
  sesso: "m",                         // Sesso (m o f)
  anniDiServizio: [2015, 2016, 2018, 2020], // Array degli anni in cui ha lavorato
  emailAziendale: "mario.rossi@azienda.com", // Email assegnata, non modificabile
  contratto: "indeterminato"           // Tipo di contratto
};

// Invocazione della funzione per stampare le informazioni di Mario
stampaDipendente(mario);


// SNACK 3

// Developer: Dipendente + proprietà specifiche
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior"; // Livello esperienza
  linguaggi?: string[];                          // Linguaggi di programmazione 
  certificazioni: string[];                      // Certificazioni tecniche 
};

// ProjectManager: Dipendente + proprietà specifiche
type ProjectManager = Dipendente & {
  teamSize: number | null;                       // Dimensione del team (null se non assegnato)
  budgetGestito?: number;                        // Budget annuale gestito 
  stakeholderPrincipali: string[];               // Nomi stakeholder (può essere vuoto)
};

// BONUS: tipo Team con tuple di membri
type Team = {
  nome: string;                                  // Nome del team
  progettoAttuale: string | null;                // Nome progetto o null se non assegnato
  budget: number;                                // Budget assegnato
  membri: [ProjectManager, ...Developer[]];      // Tuple: 1 PM seguito da almeno 1 Developer
};

// Esempi

// Esempio di Developer 
const dev1: Developer = {
  nome: "Luca",
  cognome: "Bianchi",
  annoNascita: 1990,
  sesso: "m",
  anniDiServizio: [2018, 2019, 2020],
  emailAziendale: "luca.bianchi@azienda.com",
  contratto: "indeterminato",
  livelloEsperienza: "Senior",
  linguaggi: ["TypeScript", "JavaScript"],
  certificazioni: ["AWS Certified Developer"]
};

// Esempio di Project Manager
const pm1: ProjectManager = {
  nome: "Anna",
  cognome: "Verdi",
  annoNascita: 1982,
  sesso: "f",
  anniDiServizio: [2010, 2011, 2012],
  emailAziendale: "anna.verdi@azienda.com",
  contratto: "indeterminato",
  teamSize: 5,
  budgetGestito: 500000,
  stakeholderPrincipali: ["CEO", "CTO"]
};

// Esempio di Team
const teamAlpha: Team = {
  nome: "Alpha",
  progettoAttuale: "Nuovo Sito Web",
  budget: 1000000,
  membri: [pm1, dev1]
};

