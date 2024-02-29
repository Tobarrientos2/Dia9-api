import type { Obj_arr_obj } from '../types';

export function mValidate_obj_arr_obj(obj_arr_obj_i: Obj_arr_obj) {
    //Inicializa un objeto con arrays dentro, cuyos arrays poseen objetos dentro.
    let obj_arr_obj_o: Obj_arr_obj;

    if (!obj_arr_obj_i){
        console.error('El objeto se encuentra vacio');
    };
    return obj_arr_obj_o;
};