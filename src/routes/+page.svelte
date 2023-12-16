<script lang="ts">
	import { onMount } from 'svelte';
	import { exReadable } from '../stores/exStore.js';
	import { sc_lc1_1Readable,sc_lc2_1Readable } from '../stores/scStore.js';
	import { tmReadable } from '../stores/tmStore.js';

	
	// Initialize function 'limitarPalabras' with two parameters (subject-chain: atribute).
		//This function makes some description to size well on divs.
	//@param 'cadena': subject
	//@param 'maxPalabras': atribute 

	export function limitarPalabras(cadena, maxPalabras) {
	  // Check if cadena is defined and a string
	  if (typeof cadena !== 'string') {
		return ''; // or some other appropriate value
	  }
	
	  // Split the input string into words
	  const palabras = cadena.split(' ');
	
	  if (palabras.length > maxPalabras) {
		return palabras.slice(0, maxPalabras).join(' ') + '...';
	  } else {
		return cadena;
	  }
	}
	let sc_dt;
	let get = sc_lc1_1Readable.subscribe((item) => sc_dt = item.sc_lc1_1);

	let noticias;
	  </script>
	  