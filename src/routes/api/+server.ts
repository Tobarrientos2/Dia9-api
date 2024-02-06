import { getService } from "../../stores/scStore"
import { getX } from "../../stores/xStore";

let pXButtons_arr = getX().pXButtons_arr;

let iABServices_obj = getService().iABServices_obj;
let pABData_obj = getService().pABData_obj
let pABId_obj = getService().pABId_obj;

export const GET = () => {
    return new Response(JSON.stringify({pXButtons_arr: pXButtons_arr ,iABServices_arr:iABServices_obj}), {status: 200})
}; 

export const POST = async ({request}) => {
    const body =  await request.json();
    console.log(body);

    return new Response(JSON.stringify({message: 'Success'}), {status: 201});
}