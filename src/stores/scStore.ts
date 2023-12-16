import { readable } from 'svelte/store';
import sc from '../data/sc.json';


// Obtener sc_lc_*
const sc_lc1_1 = sc.sc_lc1.sc_lc1_1;


const sc_lc2_1 = sc.sc_lc2.sc_lc2_1;

// Crear instancias separadas para cada tipo de dato
export const sc_lc1_1Readable = readable({}, (set) => {
    set(sc_lc1_1)
});


export const sc_lc2_1Readable = readable({}, (set) => {
    set(sc_lc2_1)
} );
 



export const sc_lc1_1Unsubscribe = sc_lc1_1Readable.subscribe((data) => {
   
})





export const sc_lc2_1Unsubscribe = sc_lc2_1Readable.subscribe((data) => {
   
})

