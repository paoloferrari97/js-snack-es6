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
    },
];

let indice;

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