import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQBuLTJgQvxUlz2J9zHHXhzRpFXyK_gEmHss04ZeUiN18T4FkFjPxOCQ8iNh8puqNOk1-Eb3p7ZNuFc9e8q97rkFu1zSeRf2TxB9e-9zcS7Ejbug7ppeBblK2IoP_6i_e9cM20NDrR4RAZXEDXkOTDs1VA1hNgI46lX7PtMkamsJ8nVryoC349o",
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
