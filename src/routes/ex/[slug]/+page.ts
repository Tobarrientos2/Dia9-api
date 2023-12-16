import type { PageLoad } from "../$types";
import { exReadable, exUnsubscribe} from "../../../stores/exStore";

export const load: PageLoad =  ({ params, url }) =>{

let ex;
    const exUnsubscribe = exReadable.subscribe((item) =>{

    ex = item;
    });
   

const exItem_slug = "/experiencias/" +  params.slug;


const exItem = ex.ex.find((item) => item.ex_slug === exItem_slug);



let slugObtenido = url.pathname;
let partes = slugObtenido.split('/');
let palabra = partes[partes.length - 1]; // Obtener la última parte
let palabrasSeparadas = palabra.split('-');


let pathFinal = palabrasSeparadas.map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');


let ex_dt = exItem?.ex_dt || [];


let ex_dt1 = ex_dt.map(item => item?.ex_dt1 || '');
let ex_dt2 = ex_dt.map(item => item?.ex_dt2 || '');

    return {
        page:{
            slug: params.slug,
            path: pathFinal
    }, 
    exItem: exItem,
     ex_dt1: ex_dt1,
     ex_dt2: ex_dt2,
     ex_dt: ex_dt
} 
}