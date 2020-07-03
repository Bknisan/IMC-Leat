import { CacheLeat } from "./cache";



/*



*/
export class CacheManagerLeat {
    private caches: Map<string, CacheLeat>;

    constructor() {
        this.caches = new Map();
    }



    /*
    get cache by name if exists.
    */
    getCache(name: string):CacheLeat {
        return this.caches.get(name);
    }


    /*
    create new cache with parameters and overrides existing cache with the same name.
    */
    createCacheOverride(name: string, ttl: number, maxEntries: number):CacheLeat {
        this.caches.set(name, new CacheLeat(name, ttl, maxEntries));
        return this.getCache(name);
    }

    /*
    create new cache with parameters only if there is no one with the same name.
    */
    createCacheIfAbsent(name: string, ttl: number, maxEntries: number):CacheLeat {
        if(this.caches.has(name)){
            return this.getCache(name);
        }
        this.caches.set(name, new CacheLeat(name, ttl, maxEntries));
        return this.getCache(name);
    }

    /*
    delete cache by name.
    */
    deleteCache(name: string):void {
        this.caches.get(name).deleteAllEntries();
        this.caches.delete(name);
    }


    /*
    get number of existing caches in the cache manager object
    */
    getNumberOfCaches():number {
        return this.caches.size;
    }
}