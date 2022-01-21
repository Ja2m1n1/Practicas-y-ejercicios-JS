//Ejercicio 1
function Edificio(tipoVia,nombreVia,numeroEdificio,codigoPostal){
    //Los 4 parámetros que tiene la clase Edificio.
    this.tipoVia=tipoVia;
    this.nombreVia=nombreVia;
    this.numeroEdificio=numeroEdificio;
    this.codigoPostal=codigoPostal;
    //Añadimos la propiedad para almacenar propietarios y pisos por planta, que será un mapa.
    this.mapaPropietariosEdificio=new Map();


    //Añadimos los métodos según la documentación para añadir planta,puerta y propietario.
    this.agregarPlanta = function(numeroPlanta){
        this.mapaPropietariosEdificio.set(numeroPlanta,new Map());
    }

    this.agregarPuerta = function(numeroPlanta, numeroPuerta){
        //Usamos let para declarar la variable al bloque definido.
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta);
        planta.set(numeroPuerta, new Array);
    }

    this.agregarPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta){
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta);
        let puerta = planta.get(numeroPuerta);
        puerta.push(nombrePropietario);
    }

    //Añadimos los métodos de impresión.
    this.imprimirCodigoPostal = function(){
        return "Código Postal(CP): " + this.codigoPostal;
    }

    this.imprimirNombreVia = function(){
        return "Nombre de la vía: " + this.nombreVia;
    }

    this.imprimirNumeroEdificio = function(){
        return "Número del edificio " + this.numeroEdificio;
    }

    this.imprimirTipoVia = function(){
        return "Tipo de via: " + this.tipoVia;
    }

    this.imprimirTodosPropietarios = function(){
        //Metodo keys devuelve un array de propiedades.
        let clavePlanta = this.mapaPropietariosEdificio.entries();
        let resultado = "";
        //Con este for mapeamos la planta
        for(let i = 0; i< this.mapaPropietariosEdificio.size; i++){
            //Aisgnamos la key del mapa.
            let planta = clavePlanta.next().value[0];
            //Ponemos etiqueta B para mandarlo en negrita.
            resultado += "<b>Planta: " + planta + "</b>\n";

            let segundoBucle = this.mapaPropietariosEdificio.get(planta);
            let clavePuerta = segundoBucle.keys();
            //Un vez tenemos la planta, mapeamos la puerta.
            for(let j = 0; j < segundoBucle.size;j++){
                //Aisgnamos la key del mapa
                let puerta = clavePuerta.next().value; 
                //Ponemos etiqueta B para mandarlo en  negrita.
                resultado += "\t<b>Puerta: " + puerta + "</b>\n";
                //Mapeamos los propietarios con la planta y la puerta.
                for(let k = 0; k<this.mapaPropietariosEdificio.get(planta).get(puerta).length;k++){
                   let propietario = this.mapaPropietariosEdificio.get(planta).get(puerta);
                    resultado += "\t\t" + propietario[k] + "\n";
                }
            }
        }
        return resultado;
    } 

    //Añadimos los métodos de modificación de propiedades.
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

//Ejercicio 2.

//Información en formato JSON
let edificio1 = `{
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
let edificio2 = JSON.parse(edificio1);

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
 

//Crear función para obtener fondo aleatorio.
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

//Función para llamar al fondo aleatorio.
function setRandomColor(){
    document.body.style.background = getRandomColor();
}

//Ponemos color
setRandomColor();

//Escribimos que comunidad es.
document.write('<h1>COMUNITAT DE PROPIETARIS</h1>');
document.write('<h1>'+ "[" +  objetoEdificio.tipoVia + " " + objetoEdificio.nombreVia + ', '+ objetoEdificio.numeroEdificio + ' CP ' + objetoEdificio.codigoPostal +"]" + '</h1>');

//Escribimos los propietarios con el formato demandado.
let splitPlantaPuertaPropietarios =  objetoEdificio.imprimirTodosPropietarios().split("\n").join("<br>");
let tabulaciones = splitPlantaPuertaPropietarios.split("\t").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(tabulaciones);