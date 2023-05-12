const newDivRow = document.createElement('div');
newDivRow.classList.add('row');
newDivRow.classList.add('justify-content-center');
newDivRow.classList.add('bg-dark');
newDivRow.classList.add('mx-0');
newDivRow.classList.add('py-3');

document.getElementById('userContainer').appendChild(newDivRow);


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => data.forEach(element => {

        const newDivCol = document.createElement('div');
        newDivCol.classList.add('col-auto');

        newDivRow.appendChild(newDivCol);

        const newDivCard = document.createElement('div');
        newDivCard.classList.add('card');
        newDivCard.classList.add('bg-secondary');
        newDivCard.classList.add('my-3');
        newDivCard.style.width = '18rem';

        newDivCol.appendChild(newDivCard);

        const newDivCardBody = document.createElement('div');
        newDivCardBody.classList.add('card-body');

        newDivCard.appendChild(newDivCardBody);

        const newH5 = document.createElement('h5');
        newH5.classList.add('card-title');
        newH5.classList.add('text-bg-secondary');
        newH5.innerHTML = element.name;

        newDivCardBody.appendChild(newH5);

        const newH6 = document.createElement('h6');
        newH6.classList.add('text-bg-secondary');
        newH6.innerHTML = element.email;

        newDivCardBody.appendChild(newH6);

        const newh6_2 = document.createElement('h6');
        newh6_2.classList.add('text-bg-secondary');
        newh6_2.innerHTML = element.phone;

        newDivCardBody.appendChild(newh6_2);
    }))
    .catch((error) => console.error(error));