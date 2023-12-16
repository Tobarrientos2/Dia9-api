import { readable } from "svelte/store";
import {ex, cl} from "../data/ex.json"

//Obtener Servicios desde el JSON
const data = { ex } || {};
//Crear Readable
export const exReadable = readable({}, (set) => {
    set(data);
});
export const exUnsubscribe = exReadable.subscribe(() => {

} );


//Obtener Servicios desde el JSON
const clients = {cl} || {};
//Crear Readable
export const clReadable = readable({}, (set) => {
    set(clients);
});


export const clUnsubscribe = exReadable.subscribe(() => {

} );
