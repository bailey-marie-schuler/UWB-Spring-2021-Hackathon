const faketeacherdata = 'faketeacher.csv';
const teacherAndClass = 'teacherAndClass.json';
const teacher = 'teachers.csv';

let box = document.querySelector('.box');


document.addEventListener('DOMContentLoaded', () => {
    fetch(`data/${teacherAndClass}`)
        .then(res => res.json())
        .then(data => {
            console.log(datas)
            console.log("------------")
            data.map(value => {
                console.log(value[0])
                box.innerHTML +=
                    `
            <p>${value[0]}</p>
            <p>${value[1]}</p>
            <p>${value[2]}</p>
            <p>${value[3]}</p>
            <p>${value[4]}</p>
            `
            })
        })
})

