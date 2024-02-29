import type { Obj_arr_obj } from "$lib/types";
import { Char } from "$lib/types";
import { mStore_obj_arr_obj } from "../../stores/AStore";
import A from '../../data/A.json';
import B from '../../data/B.json';
import C from '../../data/C.json';
import D from '../../data/D.json';
import E from '../../data/E.json';
import Z from '../../data/Z.json';
import { error } from "@sveltejs/kit";

// function mGetLetter(){
//     let txt_i = '';
//     txt_i = 'mAGet()';
//     let txt
//     //Obtener la letra de un metodo. ej: mAGet() -> A
// } 




function mValidate_URLSearchParams(txt_i: URL, txt_i2: string){
    let txt_o;
    let txt_p = txt_i.searchParams.get(txt_i2);
    txt_o = txt_p;
    return txt_o;
};

function mLoop_obj_arr_obj(obj_arr_obj_i: Obj_arr_obj){
    let obj_arr_obj_o = {};
    let arr_obj_o = [];
    for(let arr_obj in obj_arr_obj_o){
        arr_obj_o.push(arr_obj);
    };
    return arr_obj_o;
}; 


function mExtractKeys_obj_arr_obj(obj_arr_obj_i: Obj_arr_obj): Array<string>{
    let arr_txt_o = [];

    for(let txt of Object.keys(obj_arr_obj_i)){
        arr_txt_o.push(txt);
    } 
    return arr_txt_o;
};

function mExtractValues_arr_char(arr_char_i: Array<Char>, arr_obj_arr_i: Array<Obj_arr_obj>){
    let arr_obj_arr_obj_o = [];
    let arr_char_p = arr_char_i.map((char) => new Char(char));  
    let arr_txt_p = arr_char_p.map((char) => char.mConvert_CharToString());

    for(let txt of arr_txt_p){
        for(let obj_arr_obj of arr_obj_arr_i){
            let arr_txt_p = mExtractKeys_obj_arr_obj(obj_arr_obj);
            if(arr_txt_p.includes(txt)){
                arr_obj_arr_obj_o.push(obj_arr_obj);
            } 
        } 
    }

    return arr_obj_arr_obj_o;
} 


export const GET = async ({url, params}) => {
    let obj_arr_obj_o = {}; //Final Object
    let txt_i = 'check'
    let txt_p = mValidate_URLSearchParams(url,txt_i);

    let arr_txt_o = []; // Keys of obj_arr_obj_o
    let arr_txt_o2 = [];
    let arr_obj_arr_obj_o = [];
    let arr_obj_arr_obj_o2 = [];
    arr_obj_arr_obj_o.push(A) && arr_obj_arr_obj_o.push(B) && arr_obj_arr_obj_o.push(C) && arr_obj_arr_obj_o.push(D) && arr_obj_arr_obj_o.push(E) && arr_obj_arr_obj_o.push(Z);
    
    for(let obj_arr_obj of arr_obj_arr_obj_o){
         let arr_txt_p = mExtractKeys_obj_arr_obj(obj_arr_obj);
         arr_txt_p.forEach((txt) =>{
             arr_txt_o.push(txt);
         });
    }; 
    let arr_txt_p = txt_p.split('');
    for(let txt of arr_txt_p){
        if(arr_txt_o.includes(txt)){
            arr_txt_o2.push(txt);
        }
    };
    arr_obj_arr_obj_o2 = mExtractValues_arr_char(arr_txt_o2, arr_obj_arr_obj_o);
    if(txt_p !== ''){
        return new Response(JSON.stringify({data: arr_obj_arr_obj_o2}));
    } 
    return new Response(JSON.stringify({"error": 404}))
        
} 


export const POST = async ({request}) => {
    const body =  await request.json();

    return new Response(JSON.stringify({message: 'Success'}), {status: 201});
}