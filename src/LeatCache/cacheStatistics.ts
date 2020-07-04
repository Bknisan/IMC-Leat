/*
StatisticsLeat
wrapper class for CacheLeat for stats.
*/

import { CacheLeat } from "./cache";
import { CacheObserver, Event } from "./interfaces";

export class StatisticsLeat implements CacheObserver {
    private called: number;
    private hitted: number;
    private cache: CacheLeat;



    constructor(cache: CacheLeat) {
        this.cache = cache;
        this.inIt();

    }

    // add myself as an observer.
    inIt(): void {
        this.called = 0;
        this.hitted = 0;
        this.cache.addObserver(this);
    }


    /*
    get cache hit ratio
    */

    getCacheHitRate(): number {
        if (this.called > 0) {
            return this.hitted / this.called;
        }
        return 0;
    }


    /*
    get cache hits
    */
    getCacheHits(): number {
        return this.hitted;
    }

    /*
    get cache calls
    */
    getCacheCalls(): number {
        return this.called;
    }

    /*
    get cache
    */
    getCache(): CacheLeat {
        return this.cache;
    }

    /*
    interface implemantation
    */
    onEvent(event: Event): void {
        if (event.getEvent() == 'hit') {
            this.hitted += 1;
            this.called += 1;
        }
        else if (event.getEvent() == 'miss') {
            this.called += 1;
        }
    }



}