import { readable } from "svelte/store";
import equipo from "../data/tm.json"



//Obtener Servicios desde el JSON
const data = equipo || {};

//Crear readable
export const tmReadable = readable({}, (set) => {
    set(data)
});

export const unsubscribeEquipo = tmReadable.subscribe(() => {
} );



