import { CacheLeat } from "./cache";



/*



*/
export class CacheManagerLeat {
    private caches: Map<string, CacheLeat>;

    constructor() {
        this.caches = new Map();
    }



    /*


    */
    getCache(name: string) {
        return this.caches.get(name);
    }
    /*
    
    */
    createCacheOverride(name: string, ttl: number, maxEntries: number) {
        this.caches.set(name, new CacheLeat(name, ttl, maxEntries));
        return this.getCache(name);
    }

    /*
    
    */
    createCacheIfAbsent(name: string, ttl: number, maxEntries: number) {
        if(this.caches.has(name)){
            return this.getCache(name);
        }
        this.caches.set(name, new CacheLeat(name, ttl, maxEntries));
        return this.getCache(name);
    }
    
    /*

    */
    deleteCache(name: string) {
        this.caches.get(name).deleteAllEntries();
        this.caches.delete(name);
    }

    /*


    */
    getNumberOfCaches() {
        return this.caches.size;
    }
}