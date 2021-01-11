import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQDPw631z8VE12Nk6jAwz1avnVXs6iGZ-gAJgeZlVQ5m7nE5v5X-7kI_pqN_iX-gZtbCct30nxSIV2D5T7n5QqzG6a9lilubn4b3VcE57WcuEkvZ6S5YwUwHtKzc7SLIrrTuKjGHZK_D59E4TgcnlM0IT88EBlxeGh3BYEpPww",
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
