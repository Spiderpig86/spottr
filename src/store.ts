import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQBxuTZ_Q7_BzRHnueEF2hw9ot7Bk-TWLf-c63hCgLsuGh-EE1rRCfA-cD2NrZTvWW0hDHMQztItS_NEcvLNuZ4z8HeUuayt7DZafs61Ol_RPclAyVhlHsWALL0mJiaQSmP1NAkyU2a5CvSSmvnTLn3ThpE_x8TvHyfi5KWp8nZt46sIMc9I770",
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
