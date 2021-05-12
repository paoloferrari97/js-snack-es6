//Snack 1:
//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let biciclette = [
    {
        nome: "Cannondale SuperSix Evo Hi-Mod Disc",
        peso: 7.3
    },
    {
        nome: "Giant TCR Advanced Pro 0 Disc",
        peso: 6.8
    },
    {
        nome: "Specialized S-Works Tarmac SL7 Dura-Ace Di2",
        peso: 6.8
    },
    {
        nome: "Pinarello Dogma F12",
        peso: 5.84
    },
    {
        nome: "Cannondale SystemSix Hi-Mod",
        peso: 7.6
    },
    {
        nome: "Trek Madone SLR 9 Disc eTap",
        peso: 7.98
    },
    {
        nome: "Canyon Aeroad CFR Di2",
        peso: 7.3
    }
];

let indice = 0;

let pesoMinore = biciclette[0].peso;
for (var i = 0; i < biciclette.length; i++){
    if (biciclette[i].peso < pesoMinore) {
        pesoMinore = biciclette[i].peso;
        indice = i;
    }
}

const { nome, peso } = biciclette[indice];

console.log(nome, peso);
document.getElementById("bici_peso_minore").insertAdjacentHTML("beforeend",
    `
    La bicicletta con il peso minore è: ${nome}, e il suo peso è di ${peso} kg!
    `
);



//Snack2:
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
//nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
//contengono solo nomi e falli subiti e stampiamo tutto in console.

let squadre = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Brescia",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Parma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    }    
];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < squadre.length; i++){
    squadre[i].puntiFatti = getRandomIntInclusive(0, 100);
    squadre[i].falliSubiti = getRandomIntInclusive(0, 3000);
}

let nuovoArray = [];

for (var i = 0; i < squadre.length; i++){
    let { nome, falliSubiti } = squadre[i];
    nuovoArray.push({
        nome,
        falliSubiti
    });
}

console.log(nuovoArray);



//Snack 3:
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.

const numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const numeroUno = 5;
const numeroDue = 16;

//1 modo
let nuoviNumeri = [];

numeri.forEach((numero, i, numeri) => {
    if (i > numeroUno && i < numeroDue) {
        nuoviNumeri.push(numero);
    }
});

console.log(numeri);
console.log(nuoviNumeri);