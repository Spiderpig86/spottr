import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQC_4EHZ4DAx1rCA4UOi6UvAQ_Sb7TljkHAkOLZ0lq62XObtoo2fE6Kwws7Qo-BMeKoc3DhYOY6ltDe33pa6papXiKPmi38nIkLH4JN1HCKVeNYq08t6seVCs6x-OdXvGerUlZIG-KHjfGpQzL_LO3E3WAThVr_riC0N4d31Jcib_wAiFLLILsc",
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
