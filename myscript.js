let nome = prompt("Come ti chiami?");
console.log(nome);

let cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

let colore = prompt("Qual è il tuo colore preferito");
console.log(colore);

let profile = ` Ciao ${nome}${cognome}${colore}23`;

document.getElementById("info_utente").innerHTML = profile
