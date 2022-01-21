// num = Math.random()*(max-min)+min;
// numRedondeado = Math.round(num);


elArray = new Array();

elArray.push(1);
elArray.push(4);
elArray.push(5);

//--toString() DEVUELVE VALORES DEL ARRAY SEPARADOS POR COMA COMO UN STRING
//console.log(elArray.toString()); //--salida: 1,4,5

//--join() CONVIERTE ARRAY A STRING INDICANDO CON QUE SIMBOLO SEPARA POSICIONES
//console.log(elArray.join("..")); //--salida: 1..4..5

//--includes() DEVUELVE TRUE O FALSE SI ENCUENTRA LA CLAVE
//console.log(elArray.includes(4)); //--salida: true

//--indexOf(valor a buscar) DEVUELVE LA 1º POSICION DE UN VALOR
//console.log(elArray.indexOf(4)); //--salida: 1
//--lastIndexOf(valor a buscar) LO MISMO PERO BUSCANDO DESDE ATRAS

//--slice(desde,hasta(noincl)) DEVUELVE UN TROZO.
//console.log(elArray.slice(0,2)); //--salida: [ 1, 4 ]

//--splice(desde,cuantos,...conquereemplazar(opcional)) ELIMINA TROZO
//console.log(elArray.splice(0,1)); //--salida: [ 1 ]
//console.log(elArray.toString()); //--salida: 4,5
//console.log(elArray.splice(0,1,8)); //--salida: [ 1 ]
//console.log(elArray.toString()); //--salida: 8,4,5


//--sort() ORDENA PASANDOLE UN PARAMETRO (FUNCION)
//const palabras = ["perro","gato","casa","casita"];
//console.log(palabras.sort((a,b)=>a.localeCompare(b,'es')));//--alfabeticamente
//console.log(palabras.sort((a,b)=>a.length-b.length));//--de mas corta a mas larga

//--otros:
//--pop() ELIMINA ULTIMA POSICION DEL ARRAY (PUEDE GUARDARSE)
//--shift() ELIMINA ELEMENTO LADO IZQ
//--unshift() AÑADE ELEMENTO LADO IZQ

/*
console.log(unArray[0]); --salida: 1
console.log(unArray[1]); --salida: 4
console.log(unArray[2]); --salida: 5
*/

//---------RECORRER ARRAY CON FOR IN
//guarda en i la posicion (como un for normal)
function recorrerArray(unArray){
    for(let i in unArray){
            console.log('la posicion:'+ i +' del array es:'+unArray[i]);        
    }
}
//---------RECORRER ARRAY CON FOR OF----    
//guarda en i los valores de cada posicion
function recorrerArrayOf(unArray){
    for(let i of unArray){
        console.log('valores del array :'+ i );
    }
}

//console.log(recorrerArray(elArray));
//console.log(recorrerArrayOf(elArray));

//---------ASIGNAR FUNCION A VARIABLE
//const copiaFuncion = recorrerArray;
//console.log(copiaFuncion(elArray));



//Mapa

function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal){
    this.tipoVia = tipoVia,
    this.nombreVia = nombreVia,
    this.numeroEdificio = numeroEdificio,
    this.codigoPostal = codigoPostal,
    this.mapaPropietariosEdificio = new Map,

    this.agregarPlanta = function(numeroPlanta){
        this.mapaPropietariosEdificio.set(numeroPlanta,new Map);
    }

    this.agregarPuerta = function(numeroPlanta, numeroPuerta){
        this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta,new Array);
    }

    this.agregarPropietario = function(nombrePropietario,numeroPlanta,numeroPuerta){
        this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
    }

    this.imprimirCodigoPostal = function(){
        return 'Codigo Postal (CP): '+this.codigoPostal.toString();
    }

    this.imprimirNombreVia = function(){
        return 'Nombre de la vía: '+this.nombreVia.toString();
    }

    this.imprimirNumeroEdificio = function(){
        return 'Número de edificio: '+this.numeroEdificio.toString();
    }

    this.imprimirTipoVia = function(){
        return 'Tipo de vía: '+this.tipoVia.toString();    }

    this.imprimirTodosPropietarios = function(){ 
        let salida=[]; 
        for(let [planta,mapaPuertas] of this.mapaPropietariosEdificio){
            for(let [puerta,arrayPropietarios] of mapaPuertas){
               
                salida.push('Planta:  '+planta+ '\n'+ 
                        '    Puerta:  '+puerta+ '\n        '
                 + (arrayPropietarios.toString()).replace(',','\n        ',)+'');
            }          

    }
    return salida.toString();  
   
      
    }

    this.modificarCodigoPostal = function(nuevoCodigoPostal){
        this.codigoPostal = nuevoCodigoPostal;
    }

    this.modificarNombreVia = function(nuevoNombreVia){
        this.nombreVia = nuevoNombreVia;
    }

    this.modificarNumeroEdificio = function(nuevoNumeroEdificio){
        this.numeroEdificio = nuevoNumeroEdificio;
    }

    this.modificarTipoVia = function(nuevoTipoVia){
        this.tipoVia = nuevoTipoVia;
    }


}

const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');

console.log(JSON.stringify((edificio1)));

//Información en formato JSON (sacada con stringify)
let edificio11 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;

//Convertir el formato json a objeto.
let edificio2 = JSON.parse(edificio11);

//Crear nuevo edificio con datos del objeto.
let objetoEdificio = new Edificio(
        edificio2.tipoVia,
        edificio2.nombreVia,
        edificio2.numeroEdificio,
        edificio2.codigoPostal
)

//Recorrer mapaPropietarios y agregar propiedades al edificio objeto
for(let planta in edificio2.mapaPropietariosEdificio){
    objetoEdificio.agregarPlanta(planta);

    for(let puerta in edificio2.mapaPropietariosEdificio[planta]){
        objetoEdificio.agregarPuerta(planta, puerta);

         for(let propietario in edificio2.mapaPropietariosEdificio[planta][puerta]){
                objetoEdificio.agregarPropietario(edificio2.mapaPropietariosEdificio[planta][puerta][propietario],planta,puerta);
         }
    }
 }
 
