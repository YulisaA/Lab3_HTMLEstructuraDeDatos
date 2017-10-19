
var diccionario = [];
function IngresarValores()
{   
   var LLave = "";
   var Valor= "";
   LLave = document.getElementById("txtLlave").value;
   Valor = document.getElementById("txtValor").value;
   var bandera = true;
   for(var i = 0; i < diccionario.length; i++)
   {
       if(diccionario[i].Key === LLave)
       {
           alert("Esa Llave ya fue utilizada")
           bandera = false;
           break;
       }
       
   }
   if(bandera)
   {
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
   
   
   
   

}
function mostrarJSON(){
    document.getElementById("TextareaJSON").value = JSON.stringify(diccionario);
     
}

function mostrarXML(){
    var textoLlave = "";
    var textoValor = "";
    var xmlText = "<?xml version = 1.0 encoding = ISO-8859-1 standalone = yes ?>" + "\r\n";
    xmlText += "<Dictionary>" + "\r\n" ;
    for(var i = 0; i < diccionario.length; i++)
    {
        xmlText += "   <Entry>" + "\r\n";
        xmlText += "      <Key>" + (diccionario[i].Key) + "</Key>" + "\r\n";
        xmlText += "      <Value>" +(diccionario[i].Value) + "</Key>" + "\r\n";
        xmlText += "   </Entry>" + "\r\n";
    }
    xmlText += "</Dictionary>" + "\r\n" ;

    document.getElementById("TextareaXML").value = xmlText;
     
}