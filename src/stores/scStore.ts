import { readable } from 'svelte/store';
import A from '../data/sc.json';

// Crear instancias separadas para cada tipo de dato
export const scReadable = readable({}, (set) => {
    set(A.sc)
});
 

//Functions
let iA_arr;
export function void_mAGet_arr_obj(){
    let pA_arr = scReadable.subscribe((data) => {
        iA_arr = data;
    });
    let pAId_obj = iA_arr[0];
    let pADetails_obj = iA_arr[1];

    return {
        iA_arr
    } 
}; 
