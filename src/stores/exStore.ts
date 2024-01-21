import { readable } from "svelte/store";
import ex from "../data/ex.json"


//Crear Readable
export const exReadable = readable({}, (set) => {
    set(ex.ex);
});


export function getExperiences(){
    let iACExperiences_arr;

    let iACExperiences = exReadable.subscribe((data) => {
        iACExperiences_arr =  data;
    });
    let pACFirstExperience_obj = iACExperiences_arr[0];
    let pACTitle_txt = pACFirstExperience_obj.ex_1;
    let pACDLightDescription_txt = pACFirstExperience_obj.ex_2;
    return {
        pACFirstExperience_obj

} 
};



