import { mAGet } from "../../stores/AStore"
import { mBGet } from "../../stores/BStore";
import { mCGet } from "../../stores/CStore";
import { mDGet } from "../../stores/DStore";
import { mZGet } from "../../stores/ZStore";

const arr_oA = mAGet().arr_obj_o1;
const arr_oB = mBGet().arr_obj_o1;
const arr_oC = mCGet().arr_obj_o1;
const arr_oD = mDGet().arr_obj_o1;
const arr_oZ = mZGet().arr_obj_o1;



export const GET = () => {
    return new Response(JSON.stringify({A:arr_oA, B:arr_oB,C:arr_oC, D:arr_oD, Z: arr_oZ}), {status: 200})
}; 

export const POST = async ({request}) => {
    const body =  await request.json();

    return new Response(JSON.stringify({message: 'Success'}), {status: 201});
}