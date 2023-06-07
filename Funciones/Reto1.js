function enteroOdecimal(parametro1){
    if (Number.isInteger(parametro1)){
        console.log('el numero es entero')
    }else {
        console.log('el numero es decimal')
    }   
}
enteroOdecimal(1100);
enteroOdecimal(11.22);

function palabraMayuscula(palabra){
    return (''+palabra).toUpperCase()
}
console.log(palabraMayuscula('como estas el dia de hoy'));


function suma (suma1, suma2){
    return suma1 + suma2
}
console.log(suma(1, 1));
console.log(suma(100, 500));

function resta (resta1, resta2){
    return resta1 - resta2
}
console.log(resta(100, 99));
console.log(resta(1200,300));

function dividir (dividir1, dividir2){
    return dividir1 / dividir2
}
console.log(dividir(200,50));
console.log(dividir(1890,800))

function multiplicar( multiplicar1, multiplicar2){
    return multiplicar1 * multiplicar2
}
console.log(multiplicar(600, 33));
console.log(multiplicar(200,1000))
