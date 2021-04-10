//search
const input = document.querySelector('.search');
let searchQuery = "";

input.addEventListener('submit', (e) => {
    e.preventDefault;
    searchQuery = e.target.search.value;
    document.location.href = '#testing';
})
