/*
cached value wrapper with ttl calls.
each get request decrease the ttl by 1.
*/
export class TTLeat {
    ttl: number;
    value: any;

    constructor(ttl: number, value: any) {
        this.value = value;
        this.ttl = ttl;
    }

    /*
    get ttl of the stored value
    */

    getTTL():number {
        return this.ttl;
    }

    /*
    get value
    */
    getValue():any {
        if (this.ttl > 0) {
            this.ttl -= 1;
        }
        return this.value;
    }


    /*
    set ttl of the value
    */
    setTTL(ttl:number):void{
        this.ttl = ttl;
    }

}