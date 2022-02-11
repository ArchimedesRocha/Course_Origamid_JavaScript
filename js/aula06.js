//Funções I
//----------------------------------------------------------------
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
//----------------------------------------------------------------
function areaQuadrado(argumento1) {
  return argumento1 * argumento1;
}
console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));
//----------------------------------------------------------------
function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);
console.log(pi());
//----------------------------------------------------------------
//Parâmetros e Argumentos
//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos.

//Peso e Altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc; //Sem o return retorna undefined
}
console.log(imc(80, 1.8));
console.log(imc(60, 1.7));
//----------------------------------------------------------------
function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do Mar";
  } else if (cor === "verde") {
    return "Eu gosto da Mata Atlântica";
  } else {
    return "Eu não gosto de nenhuma cor";
  }
}
console.log(corFavorita("azul"));
//----------------------------------------------------------------
//Argumentos podem ser Funções
//chamadas de Callback, geralmente são funções que ocorrem após algum evento.

//Passando a função dentro do Argumento
addEventListener("click", function () {
  console.log("Clicou");
});
//A função possui dois argumentos
//O primeiro é a string 'click'
//O segundo é uma função anônima
//Funções anônimas são aquelas em que o nome da função não é definido como function() ou () => {}

//Passando a função fora do Argumento
function clicando() {
  console.log("Clicando");
}
addEventListener("click", clickando);
//----------------------------------------------------------------
