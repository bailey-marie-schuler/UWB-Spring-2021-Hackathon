const key = '5f9c7d0867fdc0ff0c7a664c0561d7bd';
const div = document.querySelector('.slide-1');
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('search');

searchForm.addEventListener('click', (e) => {
    e.preventDefault;
    const searchValue = e.target.document.querySelector(searchInput).value;
    fetchAPI(searchValue);
})

const fetchAPI = (searchValue) => {
    fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${searchValue}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
