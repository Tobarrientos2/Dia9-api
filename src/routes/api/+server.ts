import { void_mAGet_arr_obj } from "../../stores/scStore"
import { void_mBGet_arr_obj } from "../../stores/tmStore";
import { void_mCGet_arr_obj } from "../../stores/exStore";
import { void_mDGet_arr_obj } from "../../stores/bfStore";

const iA_arr = void_mAGet_arr_obj().iA_arr;
const iB_arr = void_mBGet_arr_obj().iB_arr;
const iC_arr = void_mCGet_arr_obj().iC_arr;
const iD_arr = void_mDGet_arr_obj().iD_arr;




export const GET = () => {
    return new Response(JSON.stringify({A:iA_arr, B:iB_arr,C:iC_arr, D:iD_arr}), {status: 200})
}; 

export const POST = async ({request}) => {
    const body =  await request.json();

    return new Response(JSON.stringify({message: 'Success'}), {status: 201});
}