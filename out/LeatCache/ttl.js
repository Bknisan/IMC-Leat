"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TTLeat = void 0;
/*
cached value wrapper with ttl calls.
each get request decrease the ttl by 1.
*/
class TTLeat {
    constructor(ttl, value) {
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
    /*

    */
    setTTL(ttl) {
        this.ttl = ttl;
    }
}
exports.TTLeat = TTLeat;
//# sourceMappingURL=ttl.js.map