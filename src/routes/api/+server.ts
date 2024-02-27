import { error } from "@sveltejs/kit";
import { mAGet } from "../../stores/AStore"
import { mBGet } from "../../stores/BStore";
import { mCGet } from "../../stores/CStore";
import { mDGet } from "../../stores/DStore";
import { mZGet } from "../../stores/ZStore";


const arr_obj_oA = mAGet().arr_obj_o1;
const arr_obj_oB = mBGet().arr_obj_o1;
const arr_obj_oC = mCGet().arr_obj_o1;
const arr_obj_oD = mDGet().arr_obj_o1;
const arr_obj_oZ = mZGet().arr_obj_o1;


export const GET = async ({url, params}) => {
    let txt_p = url.searchParams.get('check');
    let txt_o;

    if(txt_p){
        let txt_p2 = txt_p.split('');
        for(const e of txt_p2){
    switch (e) {
        case 'A':
            txt_o = arr_obj_oA;
            break;
        case 'B':
            txt_o = arr_obj_oB;
            break;
        case 'C':
            txt_o = arr_obj_oC;
            break;
        case 'D':
            txt_o = arr_obj_oD;
            break;
        case 'Z':
            txt_o = arr_obj_oZ;
        default:
        }
        }  
    } 

    return new Response(JSON.stringify({ [txt_p]: txt_o }), {status: 200})
}; 
export const POST = async ({request}) => {
    const body =  await request.json();

    return new Response(JSON.stringify({message: 'Success'}), {status: 201});
}