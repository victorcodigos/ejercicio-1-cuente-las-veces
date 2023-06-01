function contarPalabras (texto = ` ` ) { 
    if (typeof texto !== 'string') return 'retornar o valor ingresado como una cadena';
    if (texto === '') return 'Usted no has ingresado ningun valor';
    return texto.length ;
}

console.log(contarPalabras ('Valencia')); 