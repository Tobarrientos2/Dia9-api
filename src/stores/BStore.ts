import { readable } from "svelte/store";
import B from "../data/B.json"


export const BReadable = readable({}, (set) => {
    set(B.B)
});

export const unsubscribeEquipo = BReadable.subscribe(() => {
});

//Tpyes
//X: Unsubcriber
let arr_obj_o1
export function mBGet(){
	let p1_x = BReadable.subscribe((data) => {
		arr_obj_o1 = data;
	});

    return {
        arr_obj_o1
    } 
}; 
