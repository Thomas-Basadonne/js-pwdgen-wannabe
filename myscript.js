let nome = prompt("Come ti chiami?");
console.log(nome);

let cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

let colore = prompt("Qual è il tuo colore preferito");
console.log(colore);

let profile = ` Ciao ${nome}${cognome}${colore}23`;

// let info_utente = nome + cognome + colore + "23";

// let profile = "Grazie, \n la tua password è:" + profile;

document.getElementById("info_utente").innerHTML = profile;


// opzione literals
// let info_utente = `
// Grazie,
// la password sicura è: ${nome}${cognome}${colore}23`;

console.log(profile);