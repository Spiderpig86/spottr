import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './app/modules/shared/local-storage.service';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: null,
};

@Injectable({ providedIn: 'root' })
export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  constructor(private localStorageService: LocalStorageService) {
    // Initialize state from local storage
    Object.keys(state).forEach(key => {
      state[key] = localStorageService.getItem(key);
    });
  }

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, value: any) {
    this.subject.next({ ...this.value, [name]: value });
    this.localStorageService.setItem(name, value);
  }
}
