function Paciente(numeroRegistro,nombreCompleto,numeroSS,direccion){

    this.comprobarPatrones = function(elementoAComprobar, tipoComprobacion) {
        
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

    if(this.comprobarPatrones(numeroRegistro,"numeroRegistro")){
        this.numeroRegistro = numeroRegistro;
    }else{
        this.numeroRegistro = "";
    }

    if(this.comprobarPatrones(nombreCompleto,"nombre")){
        this.nombreCompleto = nombreCompleto;
    }else{
        this.nombreCompleto = "";
    }

    if(this.comprobarPatrones(numeroSS,"numeroSS")){
        this.numeroSS = numeroSS;
    }else{
        this.numeroSS = "";
    }
    
    if(this.comprobarPatrones(direccion,"direccion")){
        this.direccion = direccion;
    }else{
        this.direccion = "";
    }
    


    this.modificarNumeroRegistro = function(nuevoNumeroRegistro){
        if(this.comprobarPatrones(nuevoNumeroRegistro,"numeroRegistro")){
            this.numeroRegistro = nuevoNumeroRegistro;
        } 
    }

    this.modificarNombreCompleto = function(nuevonombreCompleto){
        if(this.comprobarPatrones(nuevoNombreCompleto,"nombreCompleto")){
            this.nombreCompleto = nuevoNombreCompleto;
        }
    }

    this.modificarNumeroSS = function(nuevoNumeroSS){
        if(this.comprobarPatrones(nuevoNumeroSS,"numeroSS")){ 
            this.numeroSS = nuevoNumeroSS;
        }
    }

    this.modificarDireccion = function(nuevaDireccion){
        if(this.comprobarPatrones(nuevaDireccion,"direccion")){
            this.direccion = nuevaDireccion;
        }
    }   

    this.imprimirTodo = function(){
        console.log("Num Reg: "+this.numeroRegistro+"\nNom: "+this.nombreCompleto+"\nNumSS: "+this.numeroSS+"\nDir: "+this.direccion+"\n");
    }
    
    this.imprimirNumeroRegistro = function(){
        return this.numeroRegistro;
    }

    this.imprimirNombreCompleto = function(){
        return this.nombreCompleto;
    }

    this.imprimirNumeroSS = function(){
        return this.numeroSS;
    }
    
    this.imprimirDirección = function(){
        return this.direccion;
    }


}



const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);


var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;

for(let [numeroRegistro, datos] of registroPacientes){
    numeroRegistroPaciente = numeroRegistro;
    nombrePaciente = datos.split(" (")[0];
    numeroSSPaciente = datos.split(" (")[1].split(")")[0];
    direccionPaciente = datos.split("-> ")[1];
    contadorPacientes++;
    //console.log("\nPaciente numero: "+contadorPacientes+" numReg: "+numeroRegistroPaciente+" nom: "+nombrePaciente+" numeroSS: "+numeroSSPaciente+" direccion: "+direccionPaciente);
    agendaPacientes.set(contadorPacientes,new Paciente(numeroRegistroPaciente,nombrePaciente,numeroSSPaciente,direccionPaciente));
   
}

let pintarPacientes = function(agenda){
    let stringPacientes = "";
    for(let [numPaciente, objPaciente] of agenda){
        stringPacientes += "Paciente "+numPaciente+"=>\n'";
        for(let nomPropiedad in objPaciente){
            if(typeof objPaciente[nomPropiedad] != 'function'){
                stringPacientes += nomPropiedad+": "+objPaciente[nomPropiedad]+"\n";
            }           
        }
        //Borrar el ultimo salto de linea para cerrar comillas
        stringPacientes = stringPacientes.substring(0,stringPacientes.length-1);
        stringPacientes +="'\n";
    }    
    console.log(stringPacientes);
}

//console.log(agendaPacientes);
pintarPacientes(agendaPacientes);