import { readable } from "svelte/store";
import Z  from "../data/Z.json"

//Crear Readable
export const DReadable = readable({}, (set) => {
    set(Z.C)
});

let arr_obj_o1;
export function mZGet(){
    let p1_x = DReadable.subscribe((data) => {
        arr_obj_o1 = data;
    }); 
    return {
        arr_obj_o1
    }; 

}; 



