import data from "teachers.json";

const item = document.querySelector('#here');

console.log(data);
fetch("test.json")
    .then(response => console.log(response))
    .catch(err => console.log('Error'));