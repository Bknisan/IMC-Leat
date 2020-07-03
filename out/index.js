"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cacheManager_1 = require("./LeatCache/cacheManager");
var cache_1 = require("./LeatCache/cache");
Object.defineProperty(exports, "CacheLeat", { enumerable: true, get: function () { return cache_1.CacheLeat; } });
var cacheManager_2 = require("./LeatCache/cacheManager");
Object.defineProperty(exports, "CacheManagerLeat", { enumerable: true, get: function () { return cacheManager_2.CacheManagerLeat; } });
var ttl_1 = require("./LeatCache/ttl");
Object.defineProperty(exports, "TTLeat", { enumerable: true, get: function () { return ttl_1.TTLeat; } });
let manager = new cacheManager_1.CacheManagerLeat();
manager.createCacheOverride("nisan", 10, 10);
let cache = manager.getCache("nisa");
console.log(cache);
//# sourceMappingURL=index.js.map