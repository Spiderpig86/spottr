import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQAVMrCjwgYlpccYRi658LLd7yzbfBWnx5EO4ahkvvttwv9RxTKFjqAN4v7LqKhKHHf6FbPb7Bz57zTxhAAUKi_M2OD_-hq91hCEvBTbBqoBXCqr3tid6R6H4HKMu598dede6NN0jKMhQIZxBDSsaZpydyuY_DlBICHE9mvf2vR3uZ_bTND1yAXMCSeh",
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
