function saludo(box){
    console.log("Me colorque sobre .box");
    console.log(box);
    box.style.backgroundColor = "red";
}

function changebg(input){
    input.style.backgroundColor = "#cccccc";
    input.style.borderBottom = "1px solid red";
    input.style.borderRadius = "10px 10px 10px 10px";
}

function changebgbase(input){
    input.style.backgroundColor = "";
    input.style.borderBottom = "1px solid #666666";
    input.style.borderRadius = "0 0 10px 10px";
}

function capturarValor(input){
    console.log(input);
    console.log(input.value);
}

function enviarDatos(form){
    console.log(form);
    let search = document.querySelector('#search')
    console.log(search.value);
    console.log(form.search.value);
    //form.submit();
}

function whereToGo(anchor){
    console.log(anchor);
    //anchor.click();
    let enviar = false;
    let a = 1; 
    let b = 2;
    if(a < b){
        enviar = true;
    }

    return enviar;
}

let box = document.querySelector('.box');
box.onmouseover = function(){
    saludo(this);
}

let input1 = document.querySelector('#input1');
input1.onfocus = function(){
    changebg(this);
}
input1.onblur = function(){
    changebgbase(this)
}

let input2 = document.getElementsByTagName('input')[1];
input2.onchange = function(){
    capturarValor(this);
}

let form = document.querySelector('form');
form.onsubmit = function(){

    let enviar = enviarDatos(this);
    
    return enviar;
}

let links = document.getElementsByClassName('links')[0];
links.onclick = function(){

    return whereToGo(this);
}