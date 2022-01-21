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


let paciente1 = new Paciente("AAA024","Jazmin R.","123456","C/Puig teis, 22");

paciente1.imprimirTodo();

paciente1.modificarDireccion("C/Palma, 1");

paciente1.imprimirTodo();