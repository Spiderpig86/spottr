import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQDWFG7juide4lBDCcGsC0iNP9G5xH2jZOUfQ7qGucYqnj-26gDJ7_fLwS0l2QfVQggBXKJfSIAOGLMxDcDYtsAKi5byzqOq-0S3pATCcNbCRBD5IClDbl8FC8lhRuXyXwA8PhCj-o4X2ZxCFPOfs6HIoE13Ir-pqhzESDEG1x_hn5z0aAdE2yA",
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
