//Funções III - Exercícios
//----------------------------------------------------------------
//Crie uma função para verificar se um valor é truthy
function isTruthy(dado) {
  return !!dado;
}
console.log(isTruthy(23));

//Crie uma função matemática que retorne o perímetro de um quadrado que é a soma de todos os lados do quadrado
function perimetroQuadrado(lados) {
  return lados * 4;
}
console.log(perimetroQuadrado(20));

//Crie uma função que retorna o seu nome completo, ela deve possuir nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `O seu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Archimedes", "Rocha"));

//Crie uma função que verifica se um numero é para
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return "O numero é par";
  } else {
    return "O numero é impar";
  }
}
console.log(isEven(43));

//Crie uma função que retorna o tipo de dado passando nela typeof
function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado("Letras"));

//AddEventListener é uma função nativa do JavaScript
//O primeiro parâmetro é o evento que ocorre e o segundo o Callback
//Utilize essa função para mostar no console seu nome completo ao ocorrer um evento de click

addEventListener("click", function () {
  console.log("Archimedes Rocha");
});

//Corrija o erro abaixo

var totalPaises = 193; // Esta variavel estava dentro de uma função. assim gerando problema de escopo, coloquei ela fora (Global) o que resolveu o problema.
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(25));
console.log(jaVisitei(85));
