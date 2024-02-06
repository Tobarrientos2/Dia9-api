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
    let pABId_obj = iABServices_arr[0];
    let pABData_obj = iABServices_arr[1];

    return {
        iABServices_obj: iABServices_arr,
        pABId_obj,
        pABData_obj
    } 
}; 
