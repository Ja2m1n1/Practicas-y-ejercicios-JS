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

    this.imprimirTodosPropietarios = function(){  let KeyPlanta = this.mapaPropietariosEdificio.keys();
        let Planta;
        let KeyPuerta;
        let Puerta;
        let Propietario;
        let resultado = "";
        let tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
       for(let i = 0; i < this.mapaPropietariosEdificio.size; i++){
            Planta = KeyPlanta.next().value;
            KeyPuerta = this.mapaPropietariosEdificio.get(Planta).keys()
            resultado += '<p class="puerta">Planta: ' + Planta + "<br></p>";
            for(let x = 0; x < this.mapaPropietariosEdificio.get(Planta).size;x++){
                Puerta = KeyPuerta.next().value
                resultado += "<p>" + tab + "Puerta: " + Puerta + "<br></p>";
                for(let j = 0; j < this.mapaPropietariosEdificio.length;j++){
                    Propietario = this.mapaPropietariosEdificio.get(Planta).get(Puerta);
                    resultado += "<p>"+tab+tab + Propietario[j] + "<br></p>";
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

let flag = true;
let flag2 = true;

while(flag==true){


//Pedir tipo via
var tipoVia = prompt("Dime el tipo de via: ");

while( tipoVia < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var tipoVia = prompt("Dime el tipo de via: ");    
}
if (tipoVia===null){
    flag = false;
}

//Pedir nombre via
var nombreVia = prompt("Dime el nombre de la via: ");

while( nombreVia < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var nombreVia = prompt("Dime el nombre de la via: ");
}

if (nombreVia===null){
    flag = false;
}
//Pedir numero edificio
var numeroEdificio = prompt("Dime el numero del edificio: ");

while(numeroEdificio === null | numeroEdificio < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var numeroEdificio = prompt("Dime el numero del edificio: ");
}

if (numeroEdificio===null){
    flag = false;
}
//Pedir cod. postal
var codigoPostal = prompt("Dime el codigo postal: ");

while(codigoPostal.length >5 | codigoPostal < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var codigoPostal = prompt("Dime el codigo postal: ");
}

if (codigoPostal===null){
    flag = false;
}

flag = false;
}

while(flag2==true){
//Pedir la planta
var planta = prompt("Dime la planta: ");

while( planta < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var planta = prompt("Dime la planta: ");
}
if (planta===null){
    flag2 = false;
}


//Pedir la puerta
var puerta = prompt("Dime la puerta: ");

while( puerta < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var puerta = prompt("Dime la puerta: ");
}
if (puerta===null){
    flag2 = false;
}


//Pedir el propietario
var propietario = prompt("Dime el propietario: ");

while(propietario < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    var propietario = prompt("Dime el propietario: ");
}
if (propietario===null){
    flag2 = false;
}

}


const edificio1 = new Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal);
edificio1.agregarPlanta(planta);
edificio1.agregarPuerta(planta,puerta);
edificio1.agregarPropietario(propietario,planta,puerta);

console.log(edificio1)


document.write(edificio1.imprimirTodosPropietarios()+"<br>");
document.write(edificio1.imprimirTipoVia()+"<br>");
document.write(edificio1.imprimirNombreVia()+"<br>");
document.write(edificio1.imprimirNumeroEdificio()+"<br>");
document.write(edificio1.imprimirCodigoPostal()+"<br>");