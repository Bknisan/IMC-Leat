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