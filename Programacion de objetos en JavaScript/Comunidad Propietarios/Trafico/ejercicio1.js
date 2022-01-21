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
            resultado += "Planta: " + planta + "\n";

            let segundoBucle = this.mapaPropietariosEdificio.get(planta);
            let clavePuerta = segundoBucle.keys();
            //Un vez tenemos la planta, mapeamos la puerta.
            for(let j = 0; j < segundoBucle.size;j++){
                //Aisgnamos la key del mapa
                let puerta = clavePuerta.next().value; 
                resultado += "\tPuerta: " + puerta + "\n";
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


//Primera comprobación: ver que los prints funcionan.
const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');
//console.log(edificio1)
/* SALIDA:
Edificio {
  tipoVia: 'calle',
  nombreVia: 'marques de la fontsanta',
  numeroEdificio: 60,
  codigoPostal: '07005',
  mapaPropietariosEdificio: Map {},
  agregarPlanta: [Function],
  agregarPuerta: [Function],
  agregarPropietario: [Function],
  imprimirCodigoPostal: [Function],
  imprimirNombreVia: [Function],
  imprimirNumeroEdificio: [Function],
  imprimirTipoVia: [Function],
  imprimirTodosPropietarios: [Function],
  modificarCodigoPostal: [Function],
  modificarNombreVia: [Function],
  modificarNumeroEdificio: [Function],
  modificarTipoVia: [Function] }
*/


//Segunda comprobación: agregar planta y comprobar mapa.
edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
//console.log(edificio1);
/*SALIDA;
Edificio {
  tipoVia: 'calle',
  nombreVia: 'marques de la fontsanta',
  numeroEdificio: 60,
  codigoPostal: '07005',
  mapaPropietariosEdificio: Map { '1A' => Map {}, '1B' => Map {} },
  agregarPlanta: [Function],
  agregarPuerta: [Function],
  agregarPropietario: [Function],
  imprimirCodigoPostal: [Function],
  imprimirNombreVia: [Function],
  imprimirNumeroEdificio: [Function],
  imprimirTipoVia: [Function],
  imprimirTodosPropietarios: [Function],
  modificarCodigoPostal: [Function],
  modificarNombreVia: [Function],
  modificarNumeroEdificio: [Function],
  modificarTipoVia: [Function] }
  */

//Tercera comprobación: agregar puerta a las plantas y comprobar mapa.
edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1');
//console.log(edificio1);
/*SALIDA
Edificio {
  tipoVia: 'calle',
  nombreVia: 'marques de la fontsanta',
  numeroEdificio: 60,
  codigoPostal: '07005',
  mapaPropietariosEdificio:
   Map {
     '1A' => Map { '3' => [], '2' => [] },
     '1B' => Map { '1' => [] } },
  agregarPlanta: [Function],
  agregarPuerta: [Function],
  agregarPropietario: [Function],
  imprimirCodigoPostal: [Function],
  imprimirNombreVia: [Function],
  imprimirNumeroEdificio: [Function],
  imprimirTipoVia: [Function],
  imprimirTodosPropietarios: [Function],
  modificarCodigoPostal: [Function],
  modificarNombreVia: [Function],
  modificarNumeroEdificio: [Function],
  modificarTipoVia: [Function] }
*/

//Cuarta comprobación: agregar propietarios(no afecta a la salida de edificio1)
edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola','1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
//console.log(edificio1);
/* SALIDA
Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques de la fontsanta',
    numeroEdificio: 60,
    codigoPostal: '07005',
    mapaPropietariosEdificio:
     Map {
       '1A' => Map { '3' => [Array], '2' => [Array] },
       '1B' => Map { '1' => [Array] } },
    agregarPlanta: [Function],
    agregarPuerta: [Function],
    agregarPropietario: [Function],
    imprimirCodigoPostal: [Function],
    imprimirNombreVia: [Function],
    imprimirNumeroEdificio: [Function],
    imprimirTipoVia: [Function],
    imprimirTodosPropietarios: [Function],
    modificarCodigoPostal: [Function],
    modificarNombreVia: [Function],
    modificarNumeroEdificio: [Function],
    modificarTipoVia: [Function] }
*/

//Quinta comprobación: mostrar todos los propietarios.
//console.log(edificio1.imprimirTodosPropietarios());
/*SALIDA 
Planta: 1A
	Puerta: 3
		Belén Laserna Belenguer
		Pedro Jimenez Vázquez
	Puerta: 2
		Ana María Rodriguez Figuerola
Planta: 1B
	Puerta: 1
		Miguel López López
 */


edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');
//Sexta comprobación: modificación de parámetros.
//console.log(edificio1.imprimirTipoVia());
/* SALIDA
Tipo de via: avenida
*/

//console.log(edificio1.imprimirNombreVia());
/*SALIDA
Nombre de la vía: Marques de la Fontsanta
*/
//console.log(edificio1.imprimirNumeroEdificio());
/*SALIDA
Número del edificio 60A
*/
//console.log(edificio1.imprimirCodigoPostal());
/* SALIDA 
Código Postal(CP): 007005
/*/