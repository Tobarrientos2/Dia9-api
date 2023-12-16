import type { PageLoad } from "../$types";
import { exReadable, exUnsubscribe} from "../../stores/exStore";

// Función para obtener objetos aleatorios sin repetición
function obtenerObjetosAleatorios(arr: Array<object>, q:number) {
    if (q > arr.length) {
      console.error("La cantidad solicitada es mayor que la longitud del array");
      return null;
    }
  
    // Copia el array para no modificar el original
    var arrayCopiado = arr.slice();
  
    // Almacena los objetos seleccionados aleatoriamente
    var objetosAleatorios = [];
  
    for (var i = 0; i < q; i++) {
      // Genera un índice aleatorio basado en la longitud del array copiado
      var indiceAleatorio = Math.floor(Math.random() * arrayCopiado.length);
  
      // Agrega el objeto aleatorio a la lista y elimínalo del array copiado
      objetosAleatorios.push(arrayCopiado.splice(indiceAleatorio, 1)[0]);
    }
  
    return objetosAleatorios;
  }
  type CustomPageData = {
    customPathname: string;
    exRandom: object[];
  };
  
export const load: PageLoad =  ({ params, url }) =>{
  let ex;



  let slugObtenido = (url.pathname);
  let partes = slugObtenido.split('/');
  let palabra = partes[partes.length - 1]; // Obtener la última parte
  let palabrasSeparadas = palabra.split('-');

  
  let pathFinal = palabrasSeparadas.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

    const getEx = exReadable.subscribe((item) =>{

    ex = item;
    });
    exUnsubscribe();




  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const exRandom = obtenerObjetosAleatorios(ex.ex, 4);
  
  if (!exRandom) {
    console.error("No hay suficientes beneficios para seleccionar aleatoriamente.");
    return null;
  }

  

    return {
        page:{  path: pathFinal },
    exRandom: exRandom,

}   
}