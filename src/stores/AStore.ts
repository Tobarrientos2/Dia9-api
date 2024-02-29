import { readable } from 'svelte/store';
import A from '../data/A.json';
import type { Obj_arr_obj } from '../lib/types';
import type { Char } from '../lib/types';
import { mValidate_obj_arr_obj } from '$lib/validate/validation'
import type { Readable } from 'svelte/motion'; 

// function mConvert_CharToObj_arr_Obj(char_i: Char){
//     let obj_arr_obj_i: Obj_arr_obj;
//     let obj_arr_obj_o : Obj_arr_obj;
//     //Convertir el tipo Char en Array
//     let obj_arr_obj_p = mValidate_obj_arr_obj(obj_arr_obj_i);
    
// }; 
// Crear instancias separadas para cada tipo de dato
function mCreate_Readable (obj_arr_obj_i: Obj_arr_obj){
    let obj_arr_obj_o;
    let obj_arr_obj_p = readable(obj_arr_obj_i, (set) => {
        set(obj_arr_obj_i);
    });
    obj_arr_obj_o = obj_arr_obj_p;
    return obj_arr_obj_o;
}; 


export function mStore_obj_arr_obj(obj_arr_obj_i: Obj_arr_obj){
    let obj_arr_obj_o;
    obj_arr_obj_o;
    let obj_arr_obj_p = mCreate_Readable(obj_arr_obj_i);
        obj_arr_obj_p.subscribe((obj_arr_obj) => {
            obj_arr_obj_o = obj_arr_obj;
        });
        return obj_arr_obj_o;  
};
