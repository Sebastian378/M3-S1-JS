//Proyecto de sistema interactivo con javascript
//Solicitamos el nombre y la guardamos en una variable constante 
const userName = prompt("Ingrese su usuario: ");
//Solicitamos la edad y la guardamos en una variable constante 
const edadUser = prompt("Escribe tu edad: ");
//validacion de edad
if (!edadUser || isNaN(edadUser)) {
  console.error("Error por favor ingresa una edad valida en numeros");
} else {
  //Condicionales y mensajes dinámicos usando Template Literals
  const msg = (edadUser < 18)
    ? `hola ${userName}, eres menor de edad.`
    : `hola ${userName}, eres mayor de edad.`;
  alert(msg);
  console.log(msg)
  
}