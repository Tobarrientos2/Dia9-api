import { readable } from "svelte/store";
import x from "../data/x.json"

export const xReadable = readable({}, (set) =>{
set(x);
});


export function getX(){
    let pXData_obj;
    const subscribe = xReadable.subscribe((data) => { 
        pXData_obj = data;
    })

    let pXButtons_arr = pXData_obj.buttons;

    return {
        pXData_obj,
        pXButtons_arr
    } 
}; 


