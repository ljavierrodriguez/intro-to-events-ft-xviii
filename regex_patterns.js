let regex1 = /[A-Za-z]+/

let nombre = "wwww1";
console.log(regex1.test(nombre));

if (!regex1.test(nombre)) {
    console.log("Nombre no puede contener numeros");
}