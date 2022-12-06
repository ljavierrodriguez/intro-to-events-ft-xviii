let onlyLetters = /^[A-Za-z]+$/;
let onlyNumbers = /^[0-9\-]+$/;
let creditCard = /^[0-9]{4,4}-[0-9]{4,4}$/;
let validUsername = /^[\w@]{6,}$/
let validCode = /^PT-[A-Z]{4}-[0-9]{6}$/
let validRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;


if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test("12345678-9")){
    console.log('Rut Invalido');
}

let code = "PT-ABCD-000001";
console.log(validCode.test(code));
if(!validCode.test(code)){
    console.log("Codigo invalido");
}


let nombre = "ww";
console.log(onlyLetters.test(nombre));

if (!onlyLetters.test(nombre)) {
    console.log("Nombre no puede contener numeros");
}

let rut = "1234A678-9";
console.log(onlyNumbers.test(rut));
if(!onlyNumbers.test(rut)){
    console.log("Rut solo puede contener numeros");
}

let cd = "1234-1234";
console.log(creditCard.test(cd));
if(!creditCard.test(cd)){
    console.log("Formato de Tarjeta Invalido");
}

let username = "abc123";
console.log(validUsername.test(username));
if(!validUsername.test(username)){
    console.log("username no permitido");
}

let telf = document.querySelector('#telf');
telf.addEventListener('keyup', (event) => {
    const input = event.target;
    let value = "";
    for(let i = 0; i < 3; i++){
        if(i==0){
            value += input.value[i] = "(";
        }
        if(i==2){
            value += input.value[i] = ")";
        }
    }

    input.value = value;



})