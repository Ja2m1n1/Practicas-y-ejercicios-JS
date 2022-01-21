function CarritoCompra() {
    this.carrito = new Array();
    
    this.localizarItemCarrito = function (producto) {
        
    //Recorrer el carrito
        for(let pos in this.carrito){
            //Si el producto es el buscado, devuelve posicion
            //Note que se devuelve la posicion actual en el array, es decir, se comienza a contar desde 0
            //Si quicieramos empezar desde 1, solo hay que que sumarle 1 a pos antes de hacer el return
            if(this.carrito[pos][0]==producto){
                return pos;
            }
        }
        //sino, devuelve -1
        return -1;
            
        
    }   

    this.introducirItemCarrito = function (producto, cantidad) {
            this.carrito.push(new Array(producto, cantidad));
    }

    
    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = this.localizarItemCarrito(producto);
        //Se resta la cantidad pasada al producto elegido
        let nuevaCantidad = this.carrito[posicionItemCarrito][1]-cantidad
        //Si la cantidad queda a 0, se elimina el producto
        //sino, se coloca la nueva cantidad
        if(nuevaCantidad == 0){
            this.carrito.splice(posicionItemCarrito,1);
        }else{
            this.carrito[posicionItemCarrito][1]=nuevaCantidad;
        }
        
    }

}


/*Comprobaciones para ver que los metodos funcionan

let carrito1 = new CarritoCompra();
carrito1.introducirItemCarrito("bananas",8);
carrito1.introducirItemCarrito("chicles",1);
carrito1.introducirItemCarrito("pack agua",3);
carrito1.introducirItemCarrito("aguacates",2);

console.log(carrito1.localizarItemCarrito("aes"));
console.log(carrito1.localizarItemCarrito("chicles"));

carrito1.borrarItemCarrito("pack agua",3);
carrito1.borrarItemCarrito("aguacates",1);

console.log(carrito1);

*/