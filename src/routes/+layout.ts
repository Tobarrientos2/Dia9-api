import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ( {params}) =>{
    return {
        page: {
            "slug": (params.slug)
        } 
    }
} 


export const csr = false;
export const prerender = false;