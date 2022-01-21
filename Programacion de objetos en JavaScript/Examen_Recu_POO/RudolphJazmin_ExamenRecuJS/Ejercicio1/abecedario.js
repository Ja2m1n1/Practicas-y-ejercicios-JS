const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();

let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}


//Funcion que genera 20 letras aleatorias
let letrasAleatorias = function(arrayLetras){
    let arrayAleatorias = new Array();
    let num = 0;
    let letra = "";
    for(let i=0; i<20; i++){
        num = Math.round(Math.random()*(24-0));
        letra = arrayLetras[num];
        arrayAleatorias.push(letra);
    }
    return arrayAleatorias;
}

//Obtener letras aleatorias
let sorteo = letrasAleatorias(arrayAbecedario);

document.write("20 letras aleatorias: <br>")
//Imprimirlas en formato unicode
for(let pos in sorteo){
    document.write(mapaAbecedarioUnicode.get(sorteo[pos])+" ");
}

//Ordenar las letras aleatorias obtenidas
let sorteoOrdenado = sorteo.sort((b,a)=>(b.localeCompare(a,'es')));

document.write("<br><br> Letras ordenadas: <br>");

let sinRepetir = new Set();
//Al pintar las letras ordenadas se van almacenando en un set ya que este no admite valores repetidos
for(let pos in sorteoOrdenado){
    document.write(mapaAbecedarioUnicode.get(sorteoOrdenado[pos])+" ");
    sinRepetir.add(sorteoOrdenado[pos]);
}

document.write("<br><br>"+sinRepetir.size+" letras sin repetir <br>");
//Pintar las letras sin repetir
for(let letra of sinRepetir){
    document.write(mapaAbecedarioUnicode.get(letra)+" ");
}

