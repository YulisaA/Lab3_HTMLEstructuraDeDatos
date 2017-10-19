
var diccionario = [];
function IngresarValores()
{   
   var LLave = "";
   var Valor= "";
   var Crear;
   LLave = document.getElementById("txtLlave").value;
   Valor = document.getElementById("txtValor").value;
   if(isNaN(parseInt(LLave)) && LLave != "false" && LLave != "true")
   {
       LLave = LLave;
       Crear = true;
   }
   else
   {
     alert("ingrese una llave en formato de texto, cree de nuevo la Llave");
      Crear = false
   }
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

   if(Crear)
   {
    diccionario.push({Key: LLave, Value: Valor});
   }
   
   

}
function mostrarDiccionario(){
    document.getElementById("myTextarea").value = JSON.stringify(diccionario);
    
    alert(JSON.stringify(diccionario));
     
}