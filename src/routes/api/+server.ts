import { getService } from "../../stores/scStore"


let service = getService().pABFirstService;
console.log(service)

export const GET = () => {
    return new Response(JSON.stringify({message: ['Resumen', 'Core','Descartes']}), {status: 200})
}; 

export const POST = async ({request}) => {
    const body =  await request.json();
    console.log(body);

    return new Response(JSON.stringify({message: 'Success'}), {status: 201});
}