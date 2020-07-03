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


    */

    getTTL() {
        return this.ttl;
    }

    /*


    */
    getValue() {
        if (this.ttl > 0) {
            this.ttl -= 1;
        }
        return this.value;
    }

}