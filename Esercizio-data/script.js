const form = document.querySelector('form');
const btnInvio = document.querySelector('#invio');
const risultati = document.querySelector('#risultati');

btnInvio.addEventListener('click', function(e) {
    e.preventDefault();

    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const nazionalita = document.querySelector('#nazionalita').value;

    // OrarioAPI
    const apiKey = 'MY_API_KEY'; 
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${nazionalita}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataOra = `${data.formatted}`;
            //div risultati
            const divRisultati = document.createElement('div');
            divRisultati.classList.add('risultati-item');
            divRisultati.innerHTML = `
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Nazionalità:</strong> ${nazionalita}</p>
                <p><strong>Data e ora:</strong> ${dataOra}</p>
            `;
            
            risultati.appendChild(divRisultati);
        })
        .catch(error => {
            console.error(error);
            // gestione errori
            const divErrore = document.createElement('div');
            divErrore.classList.add('risultati-item', 'errore');
            divErrore.textContent = 'Si è verificato un errore. Riprova più tardi.';
            
        
            risultati.appendChild(divErrore);
        });
});


