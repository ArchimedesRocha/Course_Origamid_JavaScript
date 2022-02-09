//Boolean e Condicionais I
//----------------------------------------------------------------
//Operador Lógico && e - Se algum valor for falso retorna falso
true && true;
true && false;
false && true;
"Gato" && "Cão";
5 - 5 && 5 + 5;
"Gato" && false;
5 >= 5 && 3 < 6;

//Operador Lógico || ou - Se algum valor for true retorna true
true || true;
true || false;
false || true;
"Gato" || "Cão";
5 - 5 || 5 + 5;
"Gato" || false;
5 >= 5 || 3 < 6;

//Switch, case e break
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Vermelho":
    console.log("Olhe para as rosas");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche os olhos");
}

//Exercícios
//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28;
var idadePrimo = 32;
if (minhaIdade > idadePrimo) {
  console.log("É maior");
} else if (minhaIdade === idadePrimo) {
  console.log("É igual");
} else {
  console.log("É menor");
}

//Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
//O resultado é 3

//Verifique se as seguintes variáveis são truthy or falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

//Compare o total de habitantes do Brasil com a China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else if (brasil === china) {
  console.log("Brasil tem os mesmos habitantes que a china");
} else {
  console.log("Brasil tem menos habitantes que a china");
}

//O que irá aparecer no console
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

//O que irá aparecer no console
if ("Gato" === "gato" || 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
