import { readable } from "svelte/store";
import C from "../data/ex.json"


//Crear Readable
export const exReadable = readable({}, (set) => {
    set(C.ex);
});


export function void_mCGet_arr_obj(){
    let iC_arr;

    let iC = exReadable.subscribe((data) => {
        iC_arr =  data;
    });
    let pCFirst_obj = iC_arr[0];
    let pC_txt = pCFirst_obj.ex_1;
    let pCLightDescription_txt = pCFirst_obj.ex_2;
    return {
        iC_arr
} 
};



