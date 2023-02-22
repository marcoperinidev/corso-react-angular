const btnAggiungi = document.getElementById("aggiungi");

function aggiungiRisultato() {
   //prendo tutti gli input -> in array
    const inputValues = [
      document.getElementById("id").value,
      document.getElementById("titolo").value,
      document.getElementById("autore").value,
      document.getElementById("editore").value,
      document.getElementById("anno").value,
      document.getElementById("copertina").value,
      document.getElementById("isbn").value
    ];
  
   //nuovo elemento tr
    const tr = document.createElement("tr");
  
    inputValues.forEach(function(value) {
      const td = document.createElement("td");
      const text = document.createTextNode(value);
      td.appendChild(text);
      tr.appendChild(td);
    });

    const tdRimuovi = document.createElement("td");
    const btnRimuovi = document.createElement("button");
    btnRimuovi.innerText = "Rimuovi";

    btnRimuovi.addEventListener("click", function() {
      // Rimuovere la riga corrispondente
      tr.remove();
    });

    tdRimuovi.appendChild(btnRimuovi);

    tr.appendChild(tdRimuovi);

    const tbody = document.querySelector("#risultati tbody");
    tbody.appendChild(tr);
  }

  // event listener click
btnAggiungi.addEventListener("click", function() {
  aggiungiRisultato();

});
//prova1-----------------
// function aggiungiRisultato() {
//     // div  "container-risultati"
//     const containerRisultati = document.createElement("div");
//     containerRisultati.id = "container-risultati";
  
//     const inputValues = [
//       document.getElementById("id").value,
//       document.getElementById("titolo").value,
//       document.getElementById("autore").value,
//       document.getElementById("editore").value,
//       document.getElementById("anno").value,
//       document.getElementById("copertina").value,
//       document.getElementById("isbn").value
//     ];
  
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
