<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount, onDestroy } from "svelte";
    import NavDropDown from "./Clickeable/NavDropDown.svelte";
    import Logo from "./Logo/Logo.svelte";
    import { getService } from "../stores/scStore";
    import NavLink from "./Clickeable/NavLink.svelte";
    let iACFirstService_obj= getService().pABFirstService;
    let iACSecondService_obj = getService().iABServices_arr[1];
    let iACThirdService_obj = getService().iABServices_arr[2];
    let iACFourthService_obj = getService().iABServices_arr[3];
    let iACFifthService_obj = getService().iABServices_arr[4];
    let iACSixService_obj = getService().iABServices_arr[5];

</script>

<div class="fixed z-[9999] flex w-full items-center justify-center">
  <div
    class="mt-4 flex w-11/12 gap-6 rounded-2xl border border-solid border-gray-700 bg-gray-800 p-1 shadow-xl md:w-fit"
  >
    <div
      class="flex h-9 w-full items-center justify-between gap-0 md:justify-start"
    >
     <NavLink data="Servicios" ></NavLink>
    <Logo></Logo>
      
    </div>
  </div>
</div>
