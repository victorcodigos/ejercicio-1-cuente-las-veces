/* function contarPalabras (texto = ` ` ) { 
    if (typeof texto !== 'string') return 'retornar o valor ingresado como una cadena';
    if (texto === '') return 'Usted no has ingresado ningun valor';
    return texto.length ;
}

console.log(contarPalabras ('Me gusta Valencia porque es una ciudad que hay playas')); 

*/



const string = "Buenos dias por la manana";
const totalPalabras = 0;
function contarLetras(letra) {
    let stringMinusculas = string.toLowerCase();
    for (const i = 0; i < string.length; i++) {
        if (letra === stringMinusculas[i]) {
            totalPalabras += 1;
        }
    }
    return totalPalabras;
}

totalPalabras("z");
