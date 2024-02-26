import { readable } from "svelte/store";
import C from "../data/C.json"


//Crear Readable
export const CReadable = readable({}, (set) => {
    set(C.C);
});


let arr_obj_o1;
export function mCGet(){
    let p1_x = CReadable.subscribe((e) => {
        arr_obj_o1 =  e;
    });

    return {
        arr_obj_o1
} 
};



