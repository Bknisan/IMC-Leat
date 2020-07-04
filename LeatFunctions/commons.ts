import { CacheLeat } from "../src/LeatCache/cache";
import { TTLeat } from "../src/LeatCache/ttl";


/*
clean your cache from values whose ttl is lower than
ttl parameter.
*/
function clearCacheFromOld(cache:CacheLeat, ttl:number){
    cache.getStorage().forEach((value:TTLeat,key:any)=>{
        if(value.getTTL() < ttl){
            cache.deleteByKey(key);
        }
    })
}