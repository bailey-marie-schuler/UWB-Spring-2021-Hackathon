//search
const input = document.querySelector('.search');
const item = document.querySelector('.here');
let searchQuery = "";

input.addEventListener('submit', (e) => {
    e.preventDefault;
    searchQuery = e.target.search;

})
