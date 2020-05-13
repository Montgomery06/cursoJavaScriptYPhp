//envia una alerta al navegador solo cuando javaaScript esta habilitado

var palabra = prompt("Ingrese un texto");
palabra = palabra.toLowerCase();
palabra = palabra.replace(/ /g,'');

var palabra2 = palabra.split("");


palabra2.reverse();

console.log(palabra);

console.log(palabra2);



palabra2 = palabra2.join("");

console.log(palabra2);

if(palabra == palabra2)
	alert("Este texto es palindroma");
else
	alert("Este texto no es palindroma");
