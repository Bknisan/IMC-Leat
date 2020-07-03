"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheLeat = void 0;
const ttl_1 = require("./ttl");
/*
CacheLeat class.
encapsules all the cache relevant methods.
store your values by keys.
*/
class CacheLeat {
    /*
    construct CacheLeat object.
    name: cache name.
    ttl: number of get requests to specific entry before it's get vanish.
    maxEntries: maximum number of entries in the cache.
    */
    constructor(name, ttl, maxEntries) {
        this.name = name;
        this.ttl = ttl;
        this.maxEntries = maxEntries;
        this.storage = new Map();
    }
    /*
    get cache name
    */
    getName() {
        return this.name;
    }
    /*
    get storage
    */
    getStorage() {
        return this.storage;
    }
    /*
    get value from cache based on the key.
    if the key ttl reaches to 0 it will be deleted from the cache.
    */
    getValueByKey(key) {
        if (this.storage.has(key)) {
            let valueTTL = this.storage.get(key).getTTL();
            let value = this.storage.get(key).getValue();
            if (valueTTL == 1) {
                this.storage.delete(key);
            }
            return value;
        }
        return undefined;
    }
    /*
    put key, value in the cache only if it's missing.
    */
    putIfAbsent(key, value) {
        if (this.storage.has(key) == true && this.storage.size < this.maxEntries) {
            this.storage.set(key, new ttl_1.TTLeat(this.ttl, value));
            return true;
        }
        return false;
    }
    /*
    put key, value in the cache even if such a key exists.
    */
    putOverrideValue(key, value) {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new ttl_1.TTLeat(this.ttl, value));
        }
    }
    /*
    put key, value in the cache even if such a key exists with custom ttl.
    */
    putOverrideValueCustomTTL(key, value, ttl) {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new ttl_1.TTLeat(ttl, value));
        }
    }
    /*
    clear cache.
    */
    deleteAllEntries() {
        this.storage.clear();
    }
    /*
    delete entry from the cache by the key.
    */
    deleteByKey(key) {
        return this.storage.delete(key);
    }
    /*
    get ttl of the entry by the key.
    */
    getKeyTTL(key) {
        return this.storage.get(key).getTTL();
    }
    /*
    get cache ttl.
    */
    getTTL() {
        return this.ttl;
    }
    /*
    reset ttl value for all the entries.
    */
    resetTTLForAll() {
        this.storage.forEach((value, key) => {
            this.storage.get(key).setTTL(this.ttl);
        });
    }
    /*
    reset ttl value for entry
    */
    resetTTLForKey(key) {
        this.storage.get(key).setTTL(this.ttl);
    }
}
exports.CacheLeat = CacheLeat;
;
//# sourceMappingURL=cache.js.map