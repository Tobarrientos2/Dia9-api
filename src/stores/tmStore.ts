import { readable } from "svelte/store";
import equipo from "../data/tm.json"



//Obtener Servicios desde el JSON
const data = equipo || {};

//Crear readable
export const tmReadable = readable({}, (set) => {
    set(data)
});

export const unsubscribeEquipo = tmReadable.subscribe(() => {
} );


export function getFirstMember(){
    let iAAMembers_obj;
	let pAAMembers_void = tmReadable.subscribe((data) => {
		iAAMembers_obj = data;
	});

	let pAATeamName_txt = iAAMembers_obj.tm1;
	let pAATeamLightDescription_txt = iAAMembers_obj.tm2;
	let pAATeamExtenseDescription_txt = iAAMembers_obj.tm3;

	let pAAMembersByOrder_arr = iAAMembers_obj.tm_mb;
	let pAAFirstMember = pAAMembersByOrder_arr[0];

    return {
        pAAFirstMember
    } 
}; 
