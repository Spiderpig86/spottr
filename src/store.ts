import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQAzmDP9yX92bp4xbqvYu6rnYnAdm6GQLIllyWL6X3ONqyc_nAtOYYmEsTOk3IUE1r4g-qmEQMUmw4QTcA2yhwJAERVsiSqtLmFhvY833z-uDaZglAhsUBsvBOAy41Cz7YvjuMLTpn4_85KI2d0_PdVq9yRl1IOnm017DpvPypBafP7KUTKeqpM",
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
