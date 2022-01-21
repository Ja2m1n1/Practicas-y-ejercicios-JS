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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }

document.body.style.backgroundColor = getRandomColor();


//Pedir tipo via
let tipoVia = prompt("Dime el tipo de via: ");
if(tipoVia ===null){
    break;
}
while(tipoVia < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let tipoVia = prompt("Dime el tipo de via: ");
}
//Pedir nombre via
let nombreVia = prompt("Dime el nombre de la via: ");
if(nombreVia ===null){
    break;
}
while( nombreVia < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let nombreVia = prompt("Dime el nombre de la via: ");
}
//Pedir numero edificio
let numeroEdificio = prompt("Dime el numero del edificio: ");
if(numeroEdificio ===null){
    break;
}
while( numeroEdificio < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let numeroEdificio = prompt("Dime el numero del edificio: ");
}
//Pedir cod. postal
let codigoPostal = prompt("Dime el codigo postal: ");
if(codigoPostal ===null){
    break;
}
while(codigoPostal.length > 5 | codigoPostal < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let codigoPostal = prompt("Dime el codigo postal: ");
}
//-----------------------------------------------------------------CREAR EDIFICIO
const edificio1 = new Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal);


//Pedir datos al usuario de manera repetida
while(true){


//Pedir la planta
let planta = prompt("Dime la planta: ");
if(numeroEdificio ===null){
    break;
}
while( planta < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let planta = prompt("Dime la planta: ");
}

//-------------------------------------CREAR PLANTA
edificio1.agregarPlanta(planta);


//Pedir la puerta
let puerta = prompt("Dime la puerta: ");
if(numeroEdificio ===null){
    break;
}
while(puerta === null | puerta < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let puerta = prompt("Dime la puerta: ");
}
//--------------------------------CREAR PUERTA
edificio1.agregarPuerta(planta,puerta);

//Pedir el propietario
let propietario = prompt("Dime el propietario: ");

while(propietario === null | propietario < 0){
    alert("Ingresa un valor, y que no sea numero negativo!");
    let propietario = prompt("Dime el propietario: ");
}
//------------------------------CREAR PROPIETARIO
edificio1.agregarPropietario(propietario,planta,puerta);

}




document.write("<p>"+edificio1.imprimirTodosPropietarios()+"<p>");
document.write(edificio1.imprimirTipoVia()+"<br>");
document.write(edificio1.imprimirNombreVia()+"<br>");
document.write(edificio1.imprimirNumeroEdificio()+"<br>");
document.write(edificio1.imprimirCodigoPostal()+"<br>");

