//Números e Operadores II
//----------------------------------------------------------------
//A ordem de execução importa em operadores aritmeticos binários

var total1 = 20 + 5 * 2;
var total2 = (20 + 5) * 2;
var total3 = (20 / 2) * 5;
var total4 = 10 + 10 * 2 + 20 / 2;
console.log(total1, total2, total3, total4);

//----------------------------------------------------------------
//Operadores aritméticos unários
var incremento = 5;
console.log(incremento++);
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2);
console.log(incremento2);

//----------------------------------------------------------------
//Transformando valores com operadores

var frase = "Isso é uma frase" + frase;
-frase;

var idade = "98";
+idade;
-idade;
console.log(+idade - 60);

var possuiFaculdade = true;
console.log(+possuiFaculdade);

//----------------------------------------------------------------
//Exercícios
//qual o resultado da seguinte expressão?
var totalizando = 10 + (5 * 2) / 2 + 20;

//Crie duas expressões que retornam NaN
var textoNan = "NaN Retornado";
+textoNan;
console.log(+textoNan);

var textoNan2 = 25;
console.log(textoNan * 2 + textoNan2);

//Somar a string "200" com o numero 50 e retornar 250
var twoHundred = "200";
var FifTen = 50;
console.log(+twoHundred + FifTen);

//Incremente o número 5 e retorne o seu valor incrementado
var numberFive = 5;
console.log(++numberFive);

//Como dividir peso por 2

var numeroPeso = +"80" / 2;
var unidadeKg = "kg";
var peso = numeroPeso + unidadeKg;
console.log(peso);
