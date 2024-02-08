import { readable } from "svelte/store";
import D  from "../data/bf.json"

//Crear Readable
export const bfReadable = readable({}, (set) => {
    set(D.bf)
});

let iD_arr;
export function void_mDGet_arr_obj(){
    let pD_arr = bfReadable.subscribe((data) => {
        iD_arr = data;
    }); 
    return {
        iD_arr
    }; 

}; 



