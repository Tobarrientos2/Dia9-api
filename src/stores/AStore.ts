import { readable } from 'svelte/store';
import A from '../data/A.json';

// Crear instancias separadas para cada tipo de dato
export const AReadable = readable({}, (set) => {
    set(A.A)
});
 
let arr_obj_o1;
//Types
// X: Unsubcriber

export function mAGet(){
    let arr_p1_x = AReadable.subscribe((e) => {
        arr_obj_o1 = e;
    });

    return {
        arr_obj_o1
    } 
}; 
