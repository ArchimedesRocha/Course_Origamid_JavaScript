//Variáveis são responsáveis por gravar dados na memória

//-----------------------------------------------------------------------------
//Declarando variáveis simples
var nome = "Archimedes";
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

//-----------------------------------------------------------------------------
//Multiplicando variáveis
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

//-----------------------------------------------------------------------------
//Declarar em linha
var sobrenome = "Rafael",
  cidade = "Curitiba";
console.log(sobrenome, cidade);

//-----------------------------------------------------------------------------
//Variáveis undefined
var semDefinir;
console.log(semDefinir);
//-----------------------------------------------------------------------------
//Hoisting - A ação de o console ou a exibição do resultado deve estar abaixo da variável declarada

//Assim não funciona retorna undefined
console.log(novoNome);
var novoNome = "Valdir";

//Assim funciona retorna o nome Valdir
var novoNome2 = "Valdir";
console.log(novoNome2);

//-----------------------------------------------------------------------------
//Mudar o valor de uma variável
var idadeAtual = 28;
idadeAtual = 29;

let precoDeVenda = 50;
precoDeVenda = 25;
//Let não deixa declarar duas vezes da mesma forma a mesma variável pois retorna erro

const possuiMestrado = true;
possuiMestrado = false;
//Retorna erro pois const é imutavel
//-----------------------------------------------------------------------------

//Exercício da aula01

//Declarar uma variável com o seu nome
var meuNome = "Archimedes";

//Declarar uma variável coma  sua idade
var minhaIdade = 34;

//Declarar uma variável com a sua comida favorita e não atribuir valor
var peixada;

//Atribuir valor a sua comida favorita
peixada = "Deliciosa";

//Declarar 5 variáveis diferentes sem valor
var teste01, teste02, teste03, teste04, teste05;
