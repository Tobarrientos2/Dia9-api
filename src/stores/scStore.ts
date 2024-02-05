import { readable } from 'svelte/store';
import sc from '../data/sc.json';

// Crear instancias separadas para cada tipo de dato
export const scReadable = readable({}, (set) => {
    set(sc)
});
 

//Functions
let iABServices_arr;
export function getService(){
    let pABServices_arr = scReadable.subscribe((data) => {
        iABServices_arr = data;
    });
    let pABFirstService = iABServices_arr[0];
   

    return {
        pABFirstService
    } 
}; 
