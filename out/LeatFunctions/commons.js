"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
clean your cache from values whose ttl is lower than
ttl parameter.
*/
function clearCacheFromOld(cache, ttl) {
    cache.getStorage().forEach((value, key) => {
        if (value.getTTL() < ttl) {
            cache.deleteByKey(key);
        }
    });
}
//# sourceMappingURL=commons.js.map