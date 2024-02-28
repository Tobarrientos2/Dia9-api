<script context="module" lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{"Inicio"} | </title>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	
</svelte:head>

<Header  />

<slot />

<Footer />
