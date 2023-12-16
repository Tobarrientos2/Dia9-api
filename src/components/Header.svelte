<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from "svelte";
    import { sc_lc1_1Readable, sc_lc2_1Readable  } from "../stores/scStore";
    import { sc_lc1_1Unsubscribe, sc_lc2_1Unsubscribe } from "../stores/scStore";
    onDestroy(() => {
        sc_lc1_1Unsubscribe();
        sc_lc2_1Unsubscribe();
    });
   
  </script>
