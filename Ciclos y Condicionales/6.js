for (let numero = 5; numero <= 20; numero = numero + 3){
    console.log(numero)
}

let acumulador = 0 
for (let contador =1; contador <= 100; contador ++ ){
    acumulador += contador
}
console.log(acumulador)

let acumuladorone= 1
for(let contador = 6; contador >= 1; contador --){
    acumuladorone = contador * acumuladorone
}
console.log(acumuladorone)

let fib = [0,1]
for(let num = 2; num <= 15; num++){
    fib[num]= fib[num-1]+ fib[num-2]
}
console.log(fib)

for (let i= 1; i <= 30; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log('pim pom' + i)
    } else if  (i % 3 == 0){
        console.log('pim' + i)
    } else if ( i % 5 === 0){
        console.log('pom' + i)
    }
}
