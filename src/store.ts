import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQCpT4BRJGm4O69ZTrHBVbv0Dem99hxYleWz-Wh0bgk57mTFNuobjh71kPLhNPwkN8pO8RM81dGNw5kzgjAnO1_wgZwmDMj8UZ0lvFT4OSKsxe4pp7udMGS-hKkLHBOoDfL8BD5-mO5Yz3ISrY3Ism9B4M8AoL_Rv4SvW5qhmw",
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
