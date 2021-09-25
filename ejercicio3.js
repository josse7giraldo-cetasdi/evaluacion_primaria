/*Desarrolle un programa que le pida 2 números al usuario y que
escriba en la pantalla el resultado de sumar ambos números (document.write)
recuerde usar plantillas literales pues debe un colocar un mensaje que diga = "La
suma entre numero1 y numero 2 es: resultado"*/

let numero1 = parseFloat(prompt("ingrese un numero"));
let numero2 = parseFloat(prompt("ingrese  otro numero"));
let suma = numero1 + numero2;
let resultado = `La suma del mumero 1 y numero 2 es ${suma},`;
console.log(resultado);
document.write(resultado);
