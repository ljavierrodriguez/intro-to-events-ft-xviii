let box = document.querySelector('.box');

box.addEventListener('mouseover', function(evento){
    console.log(evento);
})

box.addEventListener('click', function(evento){
    console.log(evento.x);
    console.log(evento.y);

    console.log(evento.target);
})


const handleClick = (evento) => {
    console.log(evento.target.innerText);
}

let lista = document.getElementById('lista');
let elements = lista.querySelectorAll('li');
elements.forEach(li => {
    console.log(li);
    li.addEventListener('click', handleClick)
    //li.addEventListener('dblclick', handleClick)
    li.addEventListener('mouseover', (evento) => {
        evento.target.style.backgroundColor = "gray";
    })
    li.addEventListener('mouseout', (evento) => {
        evento.target.style.backgroundColor = "cadetblue";
    })
})

let btn = document.querySelector('button');

btn.addEventListener('click', function(evento){
    saludo();
    elemento(evento);
})


let form = document.getElementById('searchForm');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    console.log(evt.target.search.value);

    let radios = document.querySelectorAll('input[type=radio]');
    if(!radios[1].checked){
        evt.target.submit();
    }

})

let anchor = document.querySelector('.links');

anchor.addEventListener('click', (evento) => {
    evento.preventDefault();

    console.log(evento.target);
})