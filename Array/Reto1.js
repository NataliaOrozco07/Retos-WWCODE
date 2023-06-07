const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const diasSemanaImpar = diasSemana.filter((dia, index) => index % 2 !== 0);
const diasSemanaPar = diasSemana.filter((dia, index) => index % 2 === 0); 

console.log(diasSemana);
console.log(diasSemanaImpar);
console.log(diasSemanaPar);
