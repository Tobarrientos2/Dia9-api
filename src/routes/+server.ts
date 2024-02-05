import { getService } from "../stores/scStore"

let service = getService().pABLightDescription;
console.log(service)

export async function POST(event){
    const options: ResponseInit = {
        status: 418,
        headers: {
            X: 'getServices'
        }
    }; 
    return new Response(service);
};