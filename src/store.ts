import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQCK3rT9OP_XpALsIGlz-8zIvyYKGzJ0svxxx9ngx5mjelA1g9MHL4IWPKnZ34KCIUHJIRZ8O2vnltojkOKgwpp7r2hSHapkrrmQzkU_5-jLt9-Xicl_pxu2hkbYg1BC0XcVJr2KgmfJU-Ee2shjFEuVCcVtTpfpspWWPZfR9_ggoLRWFtix28g",
};

@Injectable({ providedIn: 'root' })
export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
