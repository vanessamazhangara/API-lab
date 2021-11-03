const { default: axios } = require("axios");

const residentBtn = document.querySelector('.button')

function clickedBtn () {
    axios.get('https://swapi.dev/api/planets/')
    .then(res => {
        res.data.
    })
}

residentBtn.addEventListener('click', clickedBtn);
