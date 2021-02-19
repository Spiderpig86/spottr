import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQA0z_tJ5Wwi1duFYRBiRQCbxHBFZpgNTYvf9L80gK1Xcad2StMkgO882_f9_Y_CHndz-Tvtl2ZGS59WAPYCwmg5IIvIujg47UYkfexEX9srI_g5Q0meU5mbFg3GfPnwJxVfQsx29mxzbNDUXj9i6H5osE__0gtQxOTm4OZbXw-eLgXN9lPDLAU",
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
