

// Obtención de la URL a comprobar
var url = prompt('Indica la URL que quieres comprobar');

// Partes del patrón de la expresión regular
patronProtocolo = `^(http|fttp):/{0,3}`;
patronUsuarioPassword = `([a-zA-ZáéíóúÁÉÍÓÚ0-9]+(\.[a-zA-ZáéíóúÁÉÍÓÚ0-9]+)*(:[.]*@)?)?`;
patronNombreMaquina = `([a-zA-ZáéíóúÁÉÍÓÚ0-9]+\.[a-zA-ZáéíóúÁÉÍÓÚ0-9]+(\.[a-zA-ZáéíóúÁÉÍÓÚ0-9]+)*)`;
patronPuerto = `(:[\d]+)?`
patronRuta = `(\\[\w\\\.]+)?`
patronBusqueda = ``

// Patrón completo de la URL

let patron = new RegExp(
    patronUsuarioPassword +
    patronNombreMaquina + 
    patronPuerto + 
    patronRuta + 
    patronBusqueda);

// Comprobación de la URL de entrada con el patrón indicado
document.write(patron.test(url));


