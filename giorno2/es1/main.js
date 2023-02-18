let macchina = new Object();

function crea(){
    macchina.marca = "Brambilla"
    macchina.velocità = "Fumagalli"
    macchina.colore = "30"
    macchina.cilindrata = "180"
    macchina.anno = "pesi troppo"
}
let clickState = 0;

function mostra(){
    let p = document.getElementById("par")
    clickState++;
    if (clickState == 1) {
        p.innerHTML = macchina.marca + " " 
    } else if (clickState == 2) {
        p.innerHTML = macchina.colore + " anni" 
    } else if (clickState == 3) {
        p.innerHTML = macchina.cilindrata + " cm"
    } else if (clickState == 4) {
        p.innerHTML = macchina.anno + ", devi dimagrire"
        // clickState = 0;
    } 
};