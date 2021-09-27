import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    public counter: Subject<number> = new Subject<number>();
    constructor() {
    }

    public updateCount(count) {
        this.counter.next(count)
    }
}
