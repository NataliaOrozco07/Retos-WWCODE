function texUpperAndLowerCase(texto){
    let resultado = '';
    for (var i = 0; i <= texto.length; i++){
        if (i % 2 == 0){
            resultado += texto.charAt(i).toUpperCase();
        }else {
            resultado += texto.charAt(i).toLowerCase();
        }
    }
    return resultado;
}

console.log(texUpperAndLowerCase('este es un ejemplo de como se combinan mayusculas con minusculas'))
