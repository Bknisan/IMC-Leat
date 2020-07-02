import {CacheManagerLeat} from "./LeatCache/cacheManager"



let myCacheManager = new CacheManagerLeat();
myCache.createCacheOverride("nisans",5,40);
let cache = myCacheManager.getCache("nisans");

console.log(cache.getName());

