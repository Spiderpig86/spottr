import { Observable } from 'rxjs';

export interface ExpiringObservableCache<T> {
    expiration: number;
    observable: Observable<T>;
}