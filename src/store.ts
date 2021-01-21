import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQB_U9kRPsCkhhXG_eIx0MJBB2srcpb8lpPAHfgMJjrhteKrw3kCp1_LrV83K0oYoX8eYhDA0cNEdqHkTv-By3L0MhG_zD3KlIlTaljHZ_SWSppAyQOj6TcJcqyQmJPTZVJDUXT5L6KMuAPpNWWFn9sPT7eorACjT__TRRg2JAiQn3oFHbazZQ8",
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
