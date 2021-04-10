//search
const input = document.querySelector('.search');
let searchQuery = "";

input.addEventListener('submit', (e) => {
    e.preventDefault;
    searchQuery = e.target.search.value;
    search(searchQuery);
});

search(result) ;{
    let text = result;
    if (text[0] == "f") {
        document.location.href = '#bottom';
    }
}
