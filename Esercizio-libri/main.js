const btnAggiungi = document.getElementById("aggiungi");

function aggiungiRisultato() {
    // Creare un array con i valori dei campi input
    const inputValues = [
      document.getElementById("id").value,
      document.getElementById("titolo").value,
      document.getElementById("autore").value,
      document.getElementById("editore").value,
      document.getElementById("anno").value,
      document.getElementById("copertina").value,
      document.getElementById("isbn").value
    ];
  
    // Creare un nuovo elemento tr
    const tr = document.createElement("tr");
  
    // Creare un nuovo elemento td per ogni valore dei campi input
    inputValues.forEach(function(value) {
      const td = document.createElement("td");
      const text = document.createTextNode(value);
      td.appendChild(text);
      tr.appendChild(td);
    });
  
    // Aggiungere l'elemento tr al corpo della tabella
    const tbody = document.querySelector("#risultati tbody");
    tbody.appendChild(tr);
  }

//prova1-----------------
// function aggiungiRisultato() {
//     // div  "container-risultati"
//     const containerRisultati = document.createElement("div");
//     containerRisultati.id = "container-risultati";
  
//     // Creare un array valori campi input
//     const inputValues = [
//       document.getElementById("id").value,
//       document.getElementById("titolo").value,
//       document.getElementById("autore").value,
//       document.getElementById("editore").value,
//       document.getElementById("anno").value,
//       document.getElementById("copertina").value,
//       document.getElementById("isbn").value
//     ];
  
//     // nuovo elemento p per ogni valore dei campi input
//     inputValues.forEach(function(value) {
//       const p = document.createElement("p");
//       const text = document.createTextNode(value);
//       p.appendChild(text);
//       containerRisultati.appendChild(p);
//     });
  
//     // Aggiungere l'elemento div HTML
//     const form = document.querySelector("form");
//     form.appendChild(containerRisultati);
//   }
//fine prova1-----------------

// event listener click
btnAggiungi.addEventListener("click", function() {
        aggiungiRisultato();
      
});

//--------------------------------------------------------------------------------------
      //FUNZIONA ----------------------------
//   const id = document.getElementById("id").value;
//   const titolo = document.getElementById("titolo").value;
//   const autore = document.getElementById("autore").value;
//   const editore = document.getElementById("editore").value;
//   const anno = document.getElementById("anno").value;
//   const copertina = document.getElementById("copertina").value;
//   const isbn = document.getElementById("isbn").value;

// div per visualizzare dati 
//   const divRisultati = document.createElement("div");

// crea testo
//   const testoRisultati = document.createTextNode(`ID: ${id}, Titolo: ${titolo}, Autore: ${autore}, Editore: ${editore}, Anno: ${anno}, Copertina: ${copertina}, ISBN: ${isbn}`);

//   
//   divRisultati.appendChild(testoRisultati);

//   
//   const containerRisultati = document.getElementById("container-risultati");

// aggiungi il nuovo div al container
//   containerRisultati.appendChild(divRisultati);
// });
        //FUNZIONA ----------------------------
