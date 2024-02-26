import { readable } from "svelte/store";
import D  from "../data/D.json"

//Crear Readable
export const DReadable = readable({}, (set) => {
    set(D.D)
});

let arr_obj_o1;
export function mDGet(){
    let p1_x = DReadable.subscribe((data) => {
        arr_obj_o1 = data;
    }); 
    return {
        arr_obj_o1
    }; 

}; 



