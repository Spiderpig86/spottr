import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Auth interceptor designed to log users out once their Spotify token expires.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(err => this.handleError(err)));
    }
    
    private handleError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 || err.status === 403) {
            // Auth error for user, automatically log them out
            this.router.navigateByUrl(`/login`);
            return of(err.message);
        }
        // Bubble up other errors
        return Observable.throw(err);
    }
}