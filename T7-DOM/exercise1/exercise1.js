document.addEventListener("DOMContentLoaded", function(event) { 
    let enlaces = document.getElementsByTagName("a");
    let parrafos = document.getElementsByTagName("p");   

    let numeroEnlaces = enlaces.length;
    console.log("Numero de enlaces en la pagina= "+numeroEnlaces);
    
    let numeroParrafos = parrafos.length; 
    console.log("\nNumero de parrafos= "+numeroParrafos); 

    let direccionEnlacePenultimo = enlaces[numeroEnlaces-1];
    console.log("\nEl penultimo enlace apunta a= "+direccionEnlacePenultimo);

    let direccionEnlaceUltimo = enlaces[numeroEnlaces-2];
    console.log("\nEl ultimo enlace apunta a= "+direccionEnlaceUltimo);

    let numeroEnlacesAPrueba = 0;

    for(let cont in enlaces){       
        if(enlaces[cont] == "http://prueba/"){          
          numeroEnlacesAPrueba++;          
        }
      }
      console.log("\n"+numeroEnlacesAPrueba + " enlaces apuntan a http://prueba/")


    let numeroEnlacesDeParrafos = 0;

    let contadorParrafos = 0;     
    for(let parrafo of parrafos){
        contadorParrafos++;
        numeroEnlacesDeParrafos = parrafo.getElementsByTagName("a").length ;  
        console.log("Numero de enlaces en el parrafo nº"+contadorParrafos+": "+numeroEnlacesDeParrafos);      
        
    }

    
    //document.write(numeroEnlaces);  
    //document.write(numeroParrafos);
    //document.write(direccionEnlacePenultimo)
    
    
})