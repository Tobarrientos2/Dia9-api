import { readable } from "svelte/store";
import bf  from "../data/bf.json"

//Crear Readable
export const bfReadable = readable({}, (set) => {
    set(bf)
});

let iADBenefits_arr;
export function getBenefits(){
    let pADBenefits_arr = bfReadable.subscribe((data) => {
        iADBenefits_arr = data;
    }); 
    console.log(iADBenefits_arr);
    

}; 



