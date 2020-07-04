
/*
observer interface
*/
export interface CacheObserver {
    onEvent(event: Event): void;
}



/*
observable interface
*/
export interface ObservableCache {
    notifyObservers(event: Event): void
    addObserver(observer: CacheObserver): void;
    removeObserver(observer: CacheObserver): void;
}





/*
general event class
*/
export class Event {
    private args: any[];
    private event: string;

    constructor(event: string, args: any[]) {
        this.args = args;
        this.event = event;
    }

    getEvent() {
        return this.event;
    }

    getArgs() {
        return this.args;
    }

}