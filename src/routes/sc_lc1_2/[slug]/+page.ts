import type { PageLoad } from './$types';
import { scReadable } from '../../../stores/scStore.js';

// Función para obtener objetos aleatorios sin repetición
function obtenerObjetosAleatorios(arr, q) {
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

let sc_lc2_1;

export const load: PageLoad = ({ params, url }) => {
  const sc_lc2_1Find = scReadable.subscribe((data) => {
    sc_lc2_1 = data;
  });


  let sc_lc2_1Item_slug = "/extranjero/" + params.slug;

  // Utiliza la función obtenerObjetosAleatorios para obtener 3 modelos aleatorios
  const sc_lc2_1Random = obtenerObjetosAleatorios(sc_lc2_1, 3);

  // Muestra un mensaje de error si no hay suficientes modelos en el array
  if (!sc_lc2_1Random) {
    console.error("No hay suficientes modelos para seleccionar aleatoriamente.");
    return null;
  }

  let partes = sc_lc2_1Item_slug.split('/');
  let palabra = partes[partes.length - 1]; // Obtener la última parte
  let palabrasSeparadas = palabra.split('-');
  
  let pathFinal = palabrasSeparadas.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }).join(' ');



  // Utiliza el modeloEncontrado correspondiente al slug proporcionado en params
  const sc_lc2_1Item = sc_lc2_1.find((item) => item.sc_slug === sc_lc2_1Item_slug);


  let sc_dt = sc_lc2_1Item?.sc_dt || [];

  let sc_dt1 = sc_dt.map(item => item?.sc_dt1 || '').join(0);
  let sc_dt2 = sc_dt.map(item => item?.sc_dt2 || '').join(0);
  

  return {
    page:{ 
        path: pathFinal
    }, 
    sc_lc2_1Random: sc_lc2_1Random,
    sc_lc2_1Item: {
      sc_1: sc_lc2_1Item.sc_1,
      sc_img: sc_lc2_1Item.sc_img,
      sc_2: sc_lc2_1Item.sc_2,
      sc_3: sc_lc2_1Item.sc_3,
      sc_dt1: sc_dt1,
      sc_dt2: sc_dt2,
      sc_dt:sc_dt
    },
  };
};
