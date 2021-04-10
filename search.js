const faketeacherdata = 'faketeacher.csv';
const teacherAndClass = 'teacherAndClass';
const teacher = 'teachers.csv';

fetch(`data/${teacherAndClass}.json`)
.then(res => res.json())
.then(data => console.log(data))