import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './app/modules/shared/local-storage.service';

export interface State {
  // Match keys in local storage
  access_token: string | undefined;
  code_verifier: string | undefined;
  pkce_auth_code: string | undefined;
}

const state: State = {
  access_token: null,
  code_verifier: null,
  pkce_auth_code: null,
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
