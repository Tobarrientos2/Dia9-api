import { readable } from "svelte/store";
import { bf } from "../data/bf.json"

//Crear Readable
export const bfReadable = readable({}, (set) => {
    set(bf)
});

export const bfUnsubscribe = bfReadable.subscribe(() => {

});
