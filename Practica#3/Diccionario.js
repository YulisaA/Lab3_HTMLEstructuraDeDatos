
var diccionario = [];
function IngresarValores()
{   
   var LLave = "";
   var Valor= "";
   LLave = document.getElementById("txtLlave").value;
   Valor = document.getElementById("txtValor").value;
   if(Valor === "false")
   {
       Valor = false;
   }
   if(Valor === "true")
   {
       Valor = true;
   }
    
   if(isNaN(parseInt(Valor)) === false)
   {
       
    Valor = parseInt(Valor);
   }
   if(isNaN(parseFloat(Valor))=== false)
   {
       Valor = parseFloat(Valor);
   }
   diccionario.push({Key: LLave, Value: Valor});

}
function mostrarDiccionario(){
    document.getElementById("myTextarea").value = JSON.stringify(diccionario);
    
    alert(JSON.stringify(diccionario));
     
}