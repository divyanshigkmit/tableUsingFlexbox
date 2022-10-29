const fetchAndDisplayData = document.querySelector('#fetch-data')
const dataContainer = document.querySelector('.data-container');

async function getData() {
    let response = await fetch('http://localhost:3000/api/users');
    let users = await response.json();
    return users.response;
}

fetchAndDisplayData.addEventListener('click', async () => {
    let users = [];
    try {
        users = await getData();
    }catch(error) {
        console.log(error);
    }
    // console.log(tableContainer == '');
    // if(tableContainer == null) 
    displayDataInTable(users);
});

function displayDataInTable(users) {
    dataContainer.innerHTML = '';
    users.forEach(user => {
        let name = user.first_name.concat(" ", user.last_name);
        // console.log(name);
        const html = `<div class="row-container">
                <div class="flex-row">${user.id}</div>
                <div class="flex-row">${name}</div>
                <div class="flex-row">${user.contact_number}</div>
                <div class="flex-row">${user.email_id}</div>
            </div>`
            dataContainer.insertAdjacentHTML("beforeend", html);
    });
}