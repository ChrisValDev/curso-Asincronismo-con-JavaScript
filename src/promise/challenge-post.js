import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Developer Full Stack",
    "price": 100,
    "description": "A Dev with six monitors",
    "categoryId": 1,
    "images": [
        "https://st3.depositphotos.com/1010613/18045/i/600/depositphotos_180459260-stock-photo-rear-view-hacker-using-multiple.jpg"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));