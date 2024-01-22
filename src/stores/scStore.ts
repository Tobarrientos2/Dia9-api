import { readable } from 'svelte/store';
import sc from '../data/sc.json';

// Crear instancias separadas para cada tipo de dato
export const scReadable = readable({}, (set) => {
    set(sc.sc)
});


//Functions
let iABServices_arr;
export function getService(){
    let pABServices_arr = scReadable.subscribe((data) => {
        iABServices_arr = data;
    });
    console.log(iABServices_arr);
    let pABFirstService = iABServices_arr[0];
    let pABTitle = pABFirstService.sc_1;
    let pABLightDescription = pABFirstService.sc_2;
    let pABExtenseDescription = pABFirstService.sc_3;

    return {
        pABFirstService,
        iABServices_arr
    } 
}; 
