<script lang="ts">
	import { bfReadable } from '../../stores/bfStore.js';

    export let data;
    
    //Array
    let exRandom = data.exRandom;

    let bf;
    bfReadable.subscribe((item) => {
        bf = item;
    })

    let bf_co = bf.bf_co.map(item => item);
    

export function limitarPalabras(cadena, maxPalabras) {
  const palabras = cadena.split(' '); // Dividir la cadena en palabras
  if (palabras.length > maxPalabras) {
    return palabras.slice(0, maxPalabras).join(' ') + '...'; // Unir las primeras maxPalabras palabras y agregar "..."
  } else {
    return cadena; // La cadena ya contiene o es menor que maxPalabras palabras
  }
}
  </script>
