function equipoFutbol (partidoslocal, partidosvisitantes,costoboletas, boletaslocal, boletasvisitantes){
const gananciasLocal = (partidoslocal * costoboletas * boletaslocal * 0.80)/partidoslocal
const gananciasVisitantes = (partidosvisitantes * costoboletas * boletasvisitantes * 0.20)/partidosvisitantes
const gananciasTotales = (gananciasLocal + gananciasVisitantes)
return gananciasTotales
}
console.log(equipoFutbol(12,10,10000,250000,140000));

