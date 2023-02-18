function publishToTable() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const emailEle = document.createElement('td');
        nameEle.innerHTML = name;
        emailEle.innerHTML = email;
        trElement.appendChild(nameEle);
        trElement.appendChild(emailEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}