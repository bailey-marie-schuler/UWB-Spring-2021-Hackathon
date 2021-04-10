// Kyle Huynh

var myArray = [
    {'name': 'Miltun, Vicki', 'ClassDep' : 'English', 'ClassID':'101'},
    {'name': 'Miltun, Vicki', 'ClassDep' : 'English', 'ClassID':'144'},
    {'name': 'Miltun, Vicki', 'ClassDep' : 'English', 'ClassID':'242'},
    {'name': 'Bower. Noble', 'ClassDep' : 'Physics', 'ClassID':'101'},
    {'name': 'Bower, Noble', 'ClassDep' : 'Physics', 'ClassID':'121'},
    {'name': 'Bower, Noble', 'ClassDep' : 'Physics', 'ClassID':'122'}
]

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''
    
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].ClassDep}</td>
                        <td>${data[i].ClassID}</td>
                </tr>`
                table.innerHTML += row
    }
}