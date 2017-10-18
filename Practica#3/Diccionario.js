
var diccionario = [];
function IngresarValores()
{   
   var LLave = "";
   var Valor= "";
   LLave = document.getElementById("txtLlave").value;
   Valor = document.getElementById("txtValor").value;
   diccionario.push({Key: LLave, Value: Valor});

}