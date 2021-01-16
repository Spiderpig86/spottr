import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQBgq34EIBJOTA_H7GSOjFx3Jy0N60coBJmxpeQhB5gOzdO2IxqThr65cDMf64_LzdlS6mCoYuxVziSfM9DeZfvHxxpoOHb7tBbkyaPoUNXiQK3j9ReTyy_o79Fmqr2jMtZAF_PosRJO8jKlGfkioQM2z1Y94i5CA8WaJ8zilhNFqFYgDISHXoM",
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
