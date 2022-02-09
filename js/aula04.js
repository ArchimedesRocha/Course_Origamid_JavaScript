//Boolean e Condicionais I
//----------------------------------------------------------------
//Boolean - True or False

var possuiGraduacao = false;
var possuiDoutorado = false;
var possuiMestrado = true;

// Para na condição que for satisfeita
if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação mas não possui doutorado");
} else if (possuiMestrado) {
  console.log("Possui mestrado mas não possui doutorado");
} else {
  console.log("Não possui graduação, mestraod e nem doutorado");
}

//----------------------------------------------------------------
//Truthy e Falsy

//Retorna True

if (true);
if (1);
if (" ");
if (`Andre`);
if (-5);
if ({});

//----------------------------------------------------------------
//Retorna False
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ("");
if (``);

//----------------------------------------------------------------
//Negação
if (!false);
if (!0);
if (!NaN);
if (!null);
if (!undefined);
if (!!" ");
if (!!``);
//Observação você pode utilizar o !! para verificar se sua expressão é truthy or falsy

//----------------------------------------------------------------
//Operadores de Comparação
10 > 5;
10 < 5;
10 <= 10;
10 >= 11;
10 == "10";
10 == 10;
10 === "10";
10 === 10;
10 != 15;
10 != "10";
10 !== "10";
