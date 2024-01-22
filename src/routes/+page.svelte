<script lang="ts">
	import { onMount } from 'svelte';
	import { exReadable } from '../stores/exStore.js';
	import { scReadable } from '../stores/scStore.js';
	import { tmReadable } from '../stores/tmStore.js';
	import Container2 from "../components/Containers/Container2.svelte";
  	import Container4 from "../components/Containers/Container4.svelte";
	import { getService } from "../stores/scStore";

	let pABFirstService = getService().iABServices_arr[0];
	let pABTitleOfService;
   	let pABDescriptionOfService;
   	let pABImageOfService;
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
	let get = scReadable.subscribe((item) => sc_dt = item.scReadable);

	let noticias;
	  </script>
	  <Container2  />
