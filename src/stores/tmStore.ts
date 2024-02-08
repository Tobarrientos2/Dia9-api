import { readable } from "svelte/store";
import B from "../data/tm.json"


//Crear readable
export const tmReadable = readable({}, (set) => {
    set(B.tm)
});

export const unsubscribeEquipo = tmReadable.subscribe(() => {
});


export function void_mBGet_arr_obj(){
    let iB_arr;
	let pB_void = tmReadable.subscribe((data) => {
		iB_arr = data;
	});

	let pBTeamName_txt = iB_arr.tm1;
	let pBTeamLightDescription_txt = iB_arr.tm2;
	let pBTeamExtenseDescription_txt = iB_arr.tm3;
	let pBByOrder_arr = iB_arr.tm_mb;

    return {
        iB_arr
    } 
}; 
