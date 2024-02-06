<script lang="ts">
	import { onMount } from 'svelte';
	import { exReadable } from '../stores/exStore.js';
	import { scReadable } from '../stores/scStore.js';
	import { tmReadable } from '../stores/tmStore.js';


	async function subscribe(event: Event){
		   const form = event.target as HTMLFormElement
		   const data = new FormData(form)
		await fetch('/api',{
			method:'POST',
			body: data
		})
		console.log('Enviado')
	}; 
	

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
	  
	  <form on:submit|preventDefault={subscribe}>
		<input type="email" name="email" />
		<button>Subscribe</button>
	  </form>