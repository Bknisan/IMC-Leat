"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManagerLeat = void 0;
const cache_1 = require("./cache");
/*



*/
class CacheManagerLeat {
    constructor() {
        this.caches = new Map();
    }
    /*


    */
    getCache(name) {
        return this.caches.get(name);
    }
    /*
    
    */
    createCacheOverride(name, ttl, maxEntries) {
        this.caches.set(name, new cache_1.CacheLeat(name, ttl, maxEntries));
    }
    /*

    */
    deleteCache(name) {
        this.caches.get(name).deleteAllEntries();
        this.caches.delete(name);
    }
    /*


    */
    getNumberOfCaches() {
        return this.caches.size;
    }
}
exports.CacheManagerLeat = CacheManagerLeat;
//# sourceMappingURL=cacheManager.js.map