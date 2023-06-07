const numerosEnteros =[1,2,3,4,5,6,7,8,9,10];

let sumaPares= 0;
let sumaImpares= 0;

for( let i = 0; i < 10; i++){
    if (numerosEnteros[i] % 2 === 0){    
        sumaPares = numerosEnteros[i] + sumaPares;
    } else{
        sumaImpares = numerosEnteros [i] + sumaImpares;
    }
}

console.log(numerosEnteros);
console.log(sumaPares);
console.log(sumaImpares);