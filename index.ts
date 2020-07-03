import { CacheManagerLeat } from './LeatCache/cacheManager';

export {CacheLeat} from './LeatCache/cache';
export {CacheManagerLeat} from './LeatCache/cacheManager';
export {TTLeat} from './LeatCache/ttl';




let manager = new CacheManagerLeat();
manager.createCacheOverride("nisan",10,10);
let cache = manager.getCache("nisa");
console.log(cache);
