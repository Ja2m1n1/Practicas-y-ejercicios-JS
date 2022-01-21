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

    this.imprimirTodosPropietarios = function(){  let ArrPlanta = this.mapaPropietariosEdificio.keys();
        let Planta;
        let ArrPuerta;
        let Puerta;
        let Propietario;
        let resultado = "";
        let n = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
       for(let i = 0; i < this.mapaPropietariosEdificio.size; i++){
            Planta = ArrPlanta.next().value;
            ArrPuerta = this.mapaPropietariosEdificio.get(Planta).keys()
            resultado += '<h2 class="puerta">Planta: ' + Planta + "<br></h2>";
            for(let x = 0; x < this.mapaPropietariosEdificio.get(Planta).size;x++){
                Puerta = ArrPuerta.next().value
                resultado += "<h3>" + n + "Puerta: " + Puerta + "<br></h3>";
                for(let j = 0; j < this.mapaPropietariosEdificio.get(Planta).get(Puerta).length;j++){
                    Propietario = this.mapaPropietariosEdificio.get(Planta).get(Puerta);
                    resultado += "<p>"+n+n + Propietario[j] + "<br></p>";
                }
            }
        }
        return resultado;
   
   
      
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
/*
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }


document.body.style.backgroundColor = getRandomColor();
*/
//json solo contiene los valores de las propiedades, guardadas como objeto. Pero no es un objeto edificio ni tiene metodos aun.
var json = JSON.parse(edificio1);
//----------------------------------------


 
edificiZ = new Edificio(json.tipoVia,json.nombreVia,json.numeroEdificio,json.codigoPostal);



for(let planta in json.mapaPropietariosEdificio){
    edificiZ.agregarPlanta(planta);
    for(let puerta in json.mapaPropietariosEdificio[planta]){
        edificiZ.agregarPuerta(planta,puerta);
        for(let propietario in json.mapaPropietariosEdificio[planta][puerta]){
            edificiZ.agregarPropietario(json.mapaPropietariosEdificio[planta][puerta][propietario],planta,puerta);
        }
    }
}

document.write(edificiZ.imprimirTodosPropietarios());


//----------------------------------------
/*
//Se pasan los parametros cogidos del json para crear un objeto Edificio
edificio = new Edificio(json.tipoVia, json.nombreVia, json.numeroEdificio, json.codigoPostal);

document.write(
    '<h2 class=title>' +
    json.tipoVia + " " +
    json.nombreVia + ", " +
    json.numeroEdificio + " " +
    "C.P " + json.codigoPostal +
    "</h2>"
)

var array = Object.entries(json.mapaPropietariosEdificio);

var array2;

console.log(array[0])
console.log(Object.entries(array[0][1]))

for (let i = 0; i < array.length; i++) {
    edificio.agregarPlanta(array[i][0])
    array2 = Object.entries(array[i][1])
    for (let j = 0; j < array2.length; j++) {
        edificio.agregarPuerta(array[i][0], array2[j][0])
        for (let z = 0; z < array2[j][1].length; z++) {
            edificio.agregarPropietario(array2[j][1][z], array[i][0], array2[j][0])
        }
    }
}

*/

//document.write(edificio.imprimirTodosPropietarios())