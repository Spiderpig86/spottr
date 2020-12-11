import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

import { MINUTES_FACTOR } from '../music.constants';
import { CacheService } from './cache.service';

export enum Verbs {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export class HttpOptions {
    url: string
    body?: any
    cacheMins?: number
}

@Injectable()
export class CachedHttpService {
    constructor(private http: HttpClient, private cacheService: CacheService) {}

    get<T>(options: HttpOptions): Observable<T> {
        return this.httpCall(Verbs.GET, options);
    }

    post<T>(options: HttpOptions): Observable<T> {
        return this.httpCall(Verbs.POST, options);
    }

    private httpCall<T>(verb: Verbs, options: HttpOptions): Observable<T> {
        options.body = options.body ?? null;
        options.cacheMins = options.cacheMins || 0;

        const cachedResponse = this.cacheService.getCachedItem(options.url);
        if (cachedResponse) {
            return cachedResponse;
        }

        const observable$: Observable<T> = this.http.request<T>(verb, options.url, {
            body: options.body
        })
            .pipe(
                shareReplay(1),
                catchError(err => {
                    console.error(err);
                    this.cacheService.deleteCachedItem(options.url);
                    return EMPTY;
                })
            );
        
        this.cacheService.setCachedItem(options.url, observable$, options.cacheMins * MINUTES_FACTOR);
        return observable$;
    }
}