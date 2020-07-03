import { TTLeat } from "./ttl";


/*
CacheLeat class.
encapsules all the cache relevant methods.
store your values by keys.
*/
export class CacheLeat {


    private name: string;
    private ttl: number;
    private maxEntries: number;
    private storage: Map<any, TTLeat>;

    /*
    construct CacheLeat object.
    name: cache name.
    ttl: number of get requests to specific entry before it's get vanish.
    maxEntries: maximum number of entries in the cache.
    */
    constructor(name: string, ttl: number, maxEntries: number) {
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
    get value from cache based on the key.
    if the key ttl reaches to 0 it will be deleted from the cache.
    */
    getValueByKey(key: any) {
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
    putIfAbsent(key: any, value: any) {
        if (this.storage.has(key) == true && this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(this.ttl, value));
            return true;
        }
        return false;
    }

    /*
    put key, value in the cache even if such a key exists.
    */
    putOverrideValue(key: any, value: any) {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(this.ttl, value));
        }
    }


    /*
    put key, value in the cache even if such a key exists with custom ttl.
    */
    putOverrideValueCustomTTL(key: any, value: any, ttl: number) {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(ttl, value));
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
    deleteByKey(key: any) {
        return this.storage.delete(key);
    }

    /*
    get ttl of the entry by the key.
    */
    getKeyTTL(key: any) {
        return this.storage.get(key).getTTL();
    }





};