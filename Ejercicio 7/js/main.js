//envia una alerta al navegador solo cuando javaaScript esta habilitado

var numero = prompt("Ingrese un numero");
var factorial = 1;

for (var i = 2; i <= numero; i++) {
	factorial = factorial * i;
}

alert('El factorial de '+numero+' es: '+ factorial);