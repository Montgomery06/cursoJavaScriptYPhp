//envia una alerta al navegador solo cuando javaaScript esta habilitado

var valores = [true, 5, false, "hola","adios", 2];
var mayor;

if (valores[3] > valores[4]) {
	mayor = valores[2];
}else{
	mayor = valores[0];
}


console.log("¿" + valores[3] + " es mayor que " + valores[4] + "? R:" + mayor);

console.log(valores[1] + valores[5]);
console.log(valores[1] * valores[5]);
console.log(valores[1] - valores[5]);
console.log(valores[1] / valores[5]);
