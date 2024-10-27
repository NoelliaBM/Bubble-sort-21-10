//EJERCICIO ENTREGABLE – 28/10 Implemente un algoritmo de ordenamiento con el método Bubble Sort, para que ordene un arreglo de longitud N en orden descenden
import {cargar, escribirEnUnaLinea, comparar, intercambiar} from './helpers'

function burbuja2(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < (cantidad); j++) {
            if (comparar(arreglo, j, j + 1) == -1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}
let final:number=10;
let arr: number[] =new Array(final);
cargar(arr, final, 100);
escribirEnUnaLinea(arr, final);
burbuja2(arr, final);
escribirEnUnaLinea(arr, final);