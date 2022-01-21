
/*const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[A-Z]{3}[1-9]{3}/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚ][a-záéíóú]+ (\s[A-ZÁÉÍÓÚ]{1,2}\.$)/;
    let patronNumeroSS = /^[0-9]{,9}$/;
*/
 //   let patronDireccion = /^(C\/|Av.)([A-ZÁÉÍÓÚ][a-záéíóú]+\s)([a-záéíóú]+\s)\,*\d*/ ;
/*
    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    
    return  patrones.get(tipoComprobacion).test(elementoAComprobar);    
}
*/

let comprobarPatrones = function(elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/; 
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚ][a-záéíóú]+\s[A-ZÁÉÍÓÚ]{1,2}\.$/; 
    let patronNumeroSS = /^[0-9]{1,9}$/; 
    let patronDireccion = /^(C\/|Av.)([A-ZÁÉÍÓÚ][a-záéíóú]+\s?)([A-ZÁÉÍÓÚ]?[a-záéíóú]+\s?)*\,\s?\d*/ ; 

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    
    return  patrones.get(tipoComprobacion).test(elementoAComprobar);

    //Devolver el valor true si se cumple el patrón y false si no se cumple
}

console.log(comprobarPatrones("Jazmin R.","nombre"));


let listaComprobaciones = [
    ["ACD123", "numeroRegistro", true],
    ["AC123", "numeroRegistro", false],
    ["ACGTHT123", "numeroRegistro", false],
    ["145265", "numeroRegistro", false],
    ["ACG124w", "numeroRegistro", false],
    ["Fernández J.", "nombre", true],
    ["López Ariadna M.", "nombre", false],
    ["Castillo JL.", "nombre", true],
    ["Castillo JSL.", "nombre", false],
    ["López M", "nombre", false],
    ["Martinez", "nombre", false],
    ["J.", "nombre", false],
    ["010125789", "numeroSS", true],
    ["a14568892", "numeroSS", false],
    ["A14589789", "numeroSS", false],
    ["0148796", "numeroSS", true],
    ["C/Federico lorca, 50", "direccion", true],
    ["Av.Argentina, 123", "direccion", true],
    ["C/lorenzo, 3", "direccion", false],
    ["Av.Gimenez Losantos, 40", "direccion", true],
    ["C/Almirante 45", "direccion", false],
    ["C/Almirante", "direccion", false],
    ["C/45, 45", "direccion", false],
    ["Tocuato luca, 45", "direccion", false],
]

let elemento;
let tipo;
let resultadoDeseado;

for(let i=0; i<listaComprobaciones.length;i++){
    elemento = listaComprobaciones[i][0];
    tipo = listaComprobaciones[i][1];
    resultadoDeseado = listaComprobaciones[i][2];
    resultadoObtenido = comprobarPatrones(elemento,tipo);
    console.log("Elemento a comprobar: "+elemento+", Tipo de comprobacion: "+tipo+" Resultado obtenido vs deseado: "+resultadoObtenido+"/"+resultadoDeseado+"\n");
}