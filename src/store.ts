import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQCx_5-yYQKmG5aqSkeTDp_OIEA6KmxCVKqSHy7awdzO7tZ2P29I6DYxnYuLyu8t2aeqFEDNyXZcEO2pbep2JuT_7xNdFeV6jXFrfKTtEviDg4Msb4_5p1CrYOzEyKySWR-eQ6Za9lt9nDmnxRzJWxrNSUE22yNOdLK4HGCddpzGnKWXHTa3JN4",
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
