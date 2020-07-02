import { TTLeat } from "./ttl";

export class CacheLeat {


    // TODO: add ttl to entries
    private name: string;
    private ttl: number;
    private maxEntries: number;
    private storage: Map<any, TTLeat>;

    /*

    */
    constructor(name: string, ttl: number, maxEntries: number) {
        this.name = name;
        this.ttl = ttl;
        this.maxEntries = maxEntries;
        this.storage = new Map();
    }

    getName() {
        return this.name;
    }


    /*

    */
    getValueByKey(key: any) {
        let valueTTL = this.storage.get(key).getTTL();
        let value = this.storage.get(key).getValue();
        if (valueTTL == 1) {
            this.storage.delete(key);
        }
        return value;

    }

    /*

    */
    putIfAbsent(key: any, value: any) {
        if (this.storage.get(key) == undefined && this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(this.ttl, value));
            return true;
        }
        return false;
    }

    /*

    */
    putOverrideValue(key: any, value: any) {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(this.ttl, value));
        }
    }


    /*

    */
    putOverrideValueCustomTTL(key: any, value: any, ttl: number) {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(ttl, value));
        }
    }


    /*

    */
    deleteAllEntries() {
        this.storage.clear();
    }
    /*

    */
    deleteByKey(key: any) {
        return this.storage.delete(key);
    }

    /*

    */
    getKeyTTL(key: any) {
        return this.storage.get(key).getTTL();
    }





};