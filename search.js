const faketeacherdata = 'faketeacher.csv';
const teacherAndClass = 'teacherAndClass';
const teacher = 'teachers.csv';

const box = document.querySelector('.box');

document.addEventListener('DOMContentLoaded', () => {
    fetch(`data/${teacherAndClass}.json`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data[0])
        function implement(info) {
            info.map( data => {
                box += 
                `
                <p>Hello ${data[0]}</p>
                `
            })
        }
        implement(data)
    })
})


