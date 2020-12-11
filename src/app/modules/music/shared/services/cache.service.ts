import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ExpiringObservableCache } from '../models/expiration-cache.model';

@Injectable()
export class CacheService {
    cache: { [id: string]: ExpiringObservableCache<any> }

    constructor() {
        this.cache = {};
    }

    getCachedItem(key: string): Observable<any> {
        const cachedItem = this.cache[key];

        if (!cachedItem) {
            return null;
        }

        // Remove on expiration
        if (cachedItem.expiration <= Date.now()) {
            this.deleteCachedItem(key);
            return null;
        }

        return cachedItem.observable;
    }

    setCachedItem(key: string, value: Observable<any>, expirationTime: number): void {
        if (!expirationTime) {
            return;
        }

        this.cache[key] = { expiration: expirationTime, observable: value } as ExpiringObservableCache<any>;
    }

    deleteCachedItem(key: string): void {
        delete this.cache[key];
    }
}