function matematicas(num1, num2, aritmetica) {
    let resultado;
    switch(aritmetica) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultado = num1 / num2;
          console.log(resultado);
      }else{
          console.log("numerno no divisible")
      };
        break;
      default:
        resultado = "Operación no válida";
    }
    return resultado;
  }
  
  console.log(matematicas(10, 23, '+')); 
  console.log(matematicas(79, 20, '-')); 
  console.log(matematicas(33, 6, '*')); 
  console.log(matematicas(100, 30, '/')); 
  console.log(matematicas(10, 25, '++'));