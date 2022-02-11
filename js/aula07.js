//Funções II
//----------------------------------------------------------------
//Uma função pode ou não retornar um valor
//Quando não definimos o return, ela irá retornar undefined.
//O código interno da função é executado normalmente, independente de existir valor de return ou não.
//Funções devem ter nomes diferentes assim como variáveis

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc(80, 1.8);
console.log(imc(80, 1.8)); // Retorna undefined pois o console já foi passado na função.
//----------------------------------------------------------------
//Valores Retornados
//Uma função pode retornar qualquer tipo de dado e até outras Funções
//Cuidado ao retornar diferentes tipos de dados em uma mesma função, isso pode ser um problema
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Você não informou um numero";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
//----------------------------------------------------------------
//Escopo
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda falta visitar ${totalPaises - paisesVisitados} paises`;
}
console.log(totalPaises);
//Vai retornar um erro pois totalPaises não está acessivel pelo console.log
//----------------------------------------------------------------
//Escopo Léxico
//Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = "Desenvolvedor Front End";

function dados() {
  var nome = "Archimedes";
  var idade = 33;
  function outrosDados() {
    var endereco = "Maceió";
    var idade = 34;
    return `${none}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); //Retorna "Archimedes, 34, Maceió, Desenvolvedor Front End"
console.log(outrosDados()); //Retorna um erro//----------------------------------------------------------------
//Hoisting
//Antes de executar uma função, o JS move todas as funções declaradas para a memória
// O Js ler o arquivo inteiro pega as funções e joga pra cima e depois as funções e vem executando tudo, por isso mesmo executando a função antes mesmo de declarar ela funciona.

imc2(80, 1.8); // imc2 aparece no console

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}
