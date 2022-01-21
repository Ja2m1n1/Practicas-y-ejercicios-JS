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
console.log(edificio1)


edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
console.log(edificio1);


edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1');
console.log(edificio1);

edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
console.log(edificio1)

console.log(edificio1.imprimirTodosPropietarios())

edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');

console.log(edificio1.imprimirTipoVia());
console.log(edificio1.imprimirNombreVia());
console.log(edificio1.imprimirNumeroEdificio());
console.log(edificio1.imprimirCodigoPostal());

