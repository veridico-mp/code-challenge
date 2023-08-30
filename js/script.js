document.addEventListener('DOMContentLoaded', function(){

    let sendBtn = document.getElementById('enviar');

    const URL = 'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265';
    sendBtn.addEventListener('click', function(){
        let firstName = document.getElementById('nombre').value;
        let lastName = document.getElementById('apellido').value;
        let group = document.getElementById('grupo').value;
        let room = document.getElementById('sala').value;

        fetch(URL, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: 'POST',
            body: JSON.stringify({
                nombre: firstName,
                apellido: lastName,
                grupo: group,
                sala: room
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    });

    /*function sendFunction(){
        let firstName = document.getElementById('nombre').value;
        let lastName = document.getElementById('apellido').value;
        let group = document.getElementById('grupo').value;
        let room = document.getElementById('sala').value;
        fetch(URL, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: 'POST',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                group: group,
                room: room
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }*/

})