<script context="module" lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";
  import Container1 from "../components/Containers/Container1.svelte";
  import Logo from "../components/Logo/Logo.svelte";
  import Container2 from "../components/Containers/Container2.svelte";
  import Container4 from "../components/Containers/Container4.svelte";
</script>

<svelte:head>
	<title>{$page.data.page.path || "Inicio"} | </title>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
  <link rel="icon" href="../../src/../static/favicon3.png?v=2" />
</svelte:head>

<Header />

<slot />

<Footer />
