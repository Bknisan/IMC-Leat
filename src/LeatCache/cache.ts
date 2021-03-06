import { TTLeat } from "./ttl";
import { ObservableCache, CacheObserver, Event } from "./interfaces";


/*
CacheLeat class.
encapsules all the cache relevant methods.
store your values by keys.
*/
export class CacheLeat implements ObservableCache {


    private name: string;
    private ttl: number;
    private maxEntries: number;
    private storage: Map<any, TTLeat>;
    private observers: CacheObserver[];

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
    getName(): string {
        return this.name;
    }


    /*
    get storage
    */
    getStorage(): Map<any, TTLeat> {
        return this.storage;
    }

    /*
    get value from cache based on the key.
    if the key ttl reaches to 0 it will be deleted from the cache.
    */
    getValueByKey(key: any): any {
        if (this.storage.has(key)) {
            this.notifyObservers(new Event('hit', [key]))
            let valueTTL = this.storage.get(key).getTTL();
            let value = this.storage.get(key).getValue();
            if (valueTTL == 1) {
                this.storage.delete(key);
            }
            return value;
        }
        this.notifyObservers(new Event('miss', [key]));
        return undefined;
    }

    /*
    put key, value in the cache only if it's missing.
    */
    putIfAbsent(key: any, value: any): boolean {
        if (this.storage.has(key) == true && this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(this.ttl, value));
            return true;
        }
        return false;
    }

    /*
    put key, value in the cache even if such a key exists.
    */
    putOverrideValue(key: any, value: any): void {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(this.ttl, value));
        }
    }


    /*
    put key, value in the cache even if such a key exists with custom ttl.
    */
    putOverrideValueCustomTTL(key: any, value: any, ttl: number): void {
        if (this.storage.size < this.maxEntries) {
            this.storage.set(key, new TTLeat(ttl, value));
        }
    }


    /*
    clear cache.
    */
    deleteAllEntries(): void {
        this.storage.clear();
    }


    /*
    delete entry from the cache by the key.
    */
    deleteByKey(key: any): boolean {
        return this.storage.delete(key);
    }

    /*
    get ttl of the entry by the key.
    */
    getKeyTTL(key: any): number {
        return this.storage.get(key).getTTL();
    }

    /*
    get cache ttl.
    */
    getTTL(): number {
        return this.ttl;
    }



    /*
    reset ttl value for all the entries.
    */
    resetTTLForAll(): void {
        this.storage.forEach((value: TTLeat, key: any) => {
            this.storage.get(key).setTTL(this.ttl);
        });
    }


    /*
    reset ttl value for entry
    */
    resetTTLForKey(key: any): void {
        this.storage.get(key).setTTL(this.ttl);
    }

    /*
    interface implementation.
    */
    addObserver(observer: CacheObserver): void {
        this.observers.push(observer);
    }


    removeObserver(observer: CacheObserver): void {
        // delete this.observers[observer];
    }


    notifyObservers(event: Event): void {
        this.observers.forEach((observer) => {
            observer.onEvent(event);
        });
    }


};