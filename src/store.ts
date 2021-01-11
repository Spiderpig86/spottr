import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQBm1su3BGjIO_JMFDxO8Umlyl_VWPvWfIf7UmORg_MF4ZNCHgNA0Ug0vzzL8Iu74Y4JFJIPZbI86wWf9z1MxIHL_SFC8EsnX6ipNaqvvFvyVOBTXQdh_JzGrc8gWz4AdHxPfqQpAKgeevf7GdLFkiSaRyvWhlgEfmg3bR3N1g",
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
