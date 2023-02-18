// let persona = new Object();

// function crea(){
//     persona.nome = "Brambilla"
//     persona.cognome = "Fumagalli"
//     persona.eta = "30"
//     persona.altezza = "180"
//     persona.peso = "pesi troppo"
// }
// let clickState = 0;

// function mostra(){
//     let p = document.getElementById("par")
//     clickState++;
//     if (clickState == 1) {
//         p.innerHTML = persona.nome + " " + persona.cognome
//     } else if (clickState == 2) {
//         p.innerHTML = persona.eta + " anni" 
//     } else if (clickState == 3) {
//         p.innerHTML = persona.altezza + " cm"
//     } else if (clickState == 4) {
//         p.innerHTML = persona.peso + ", devi dimagrire"
//         clickState = 0;
//     } 
// };

let persona = {};

function crea(){
    persona.nome = prompt("Inserisci il nome:");
    persona.cognome = prompt("Inserisci il cognome:");
    persona.eta = prompt("Inserisci l'età:");
    persona.altezza = prompt("Inserisci l'altezza in cm:");
    persona.peso = prompt("Inserisci il peso:");
}

function mostra(){
    let p = document.getElementById("par");
    p.innerHTML = persona.nome + " " + persona.cognome + ", " + persona.eta + " anni, " + persona.altezza + " cm, " + persona.peso;
}

document.querySelector('.btn1').addEventListener('click', function() {
  crea();
});

document.querySelector('.btn2').addEventListener('click', function() {
  mostra();
});
