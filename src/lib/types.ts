export type Obj_arr_obj = { [key:string ]: Array<{[key:string]: any}>} 

export class Char {
    private char_i: string;

    constructor(char_i:string){
        if (char_i.length !== 1){
            throw new Error('This is a string, not a Character')
        } 
        this.char_i = char_i;
    }
    mCreate_Char(){
        return this.char_i;
    } 
    
    mConvert_CharToString(){
        return this.char_i.toString();
    } 
} 