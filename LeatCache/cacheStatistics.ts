/*


*/

import { CacheLeat } from "./cache";

export class StatisticsLeat {
    private called: number;
    private hitted: number;
    private cache: CacheLeat;



    constructor(cache: CacheLeat) {
        this.cache = cache;
        this.inIt();

    }

    inIt(): void {
    }


    /*


    */

    getCacheHitRate(): number {
        if (this.called > 0) {
            return this.hitted / this.called;
        }
        return 0;
    }


    /*

    */
    getCacheHits(): number {
        return this.hitted;
    }

    /*

    */
    getCacheCalls(): number {
        return this.called;
    }

    /*

    */
    getCache(): CacheLeat {
        return this.cache;
    }


}