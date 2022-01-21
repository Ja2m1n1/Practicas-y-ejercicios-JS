//Object.entries(_json o prop de json a separar_)
//Como un for..in, pero devuelve un array donde primera pos tiene todas las claves y segunda pos los valores


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
    }
    
const jsonComprobaciones = {
    "numeroRegistro" : {
        "ACD123" : true,
        "AC123" : false,
        "ACGTHT123" : false,
        "145265" : false,
        "ACG124w" : false
    },
    "nombre" : {
        "Fernández J." : true,
        "López Ariadna M." : false,
        "Castillo JL." : true,
        "Castillo JSL." : false,
        "López M" : false,
        "Martinez" : false,
        "J." : false
    },
    "numeroSS" : {
        "010125789" : true,
        "a14568892" : false,
        "A14589789" : false,
        "0148796" : true,
    },
    "direccion" : {
        "C/Federico lorca, 50" : true,
        "Av.Argentina, 123" : true,
        "C/lorenzo, 3" : false,
        "Av.Gimenez Losantos, 40" : true,
        "C/Almirante 45" : false,
        "C/Almirante" : false,
        "C/45, 45" : false,
        "Tocuato luca, 45" : false,
    }
};

//Resolucion transformando el JSON a objeto y recorriendo el objeto

/**
let objetoComprobaciones = Object.assign({}, jsonComprobaciones);
let contenido;

for (let prop in objetoComprobaciones){
    contenido = objetoComprobaciones[prop];
    for (let i in contenido){
        console.log(`Tipo de comprobacion: ${prop} - Elemento a comprobar: ${i}\n` + 
        `Resultado correcto: ${contenido[i]} - Resultado obtenido: ${comprobarPatrones(i, prop)}`);
        console.log (`\n`);
    }
}

//-------------------------------------------------------------------------

//Resolucion recorriendo el JSON

let arrayKeysJSON = Object.keys(jsonComprobaciones);
let arrayValuesJSON = Object.values(jsonComprobaciones);
let tipoComp;
let values;

//Aqui recorremos un array simple por lo que posTipoComp es el contador (Guarda numeros de posiciones)
for(let posTipoComp in arrayKeysJSON){
    tipoComp = arrayKeysJSON[posTipoComp];
    values = arrayValuesJSON[posTipoComp];
    //Como en values hay claves y valores, en elemAComprobar se guardara el nombre de la clave
    for(let elemAComprobar in values){        
        console.log(`Tipo de comprobacion: ${tipoComp} - Elemento a comprobar: ${elemAComprobar}\n` + 
        `Resultado correcto: ${values[elemAComprobar]} - Resultado obtenido: ${comprobarPatrones(elemAComprobar, tipoComp)}`);
        console.log (`\n`);
    }
}
*/

//-----------------------------------
//Resolucion recorriendo el JSON

let arrayTiposJSON = Object.keys(jsonComprobaciones);
let arrayValorYResultadoJSON = Object.values(jsonComprobaciones);
let tipoComprobacion;
let comprobacionyResultado_Filtrada;
let resultado;

//Aqui recorremos un array simple por lo que posTipoComp es el contador (Guarda numeros de posiciones)
for(let posTipoComp in arrayTiposJSON){
    tipoComprobacion = arrayTiposJSON[posTipoComp];
    comprobacionyResultado_Filtrada = arrayValorYResultadoJSON[posTipoComp];

    for(let comprobacion in comprobacionyResultado_Filtrada){
        resultado = comprobacionyResultado_Filtrada[comprobacion];

        console.log(`Tipo de comprobacion: ${tipoComprobacion} - Elemento a comprobar: ${comprobacion}\n` + 
        `Resultado correcto: ${resultado} - Resultado obtenido: ${comprobarPatrones(comprobacion,tipoComprobacion)}`);
        console.log (`\n`);
    }
}
