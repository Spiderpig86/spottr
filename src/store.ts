import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQDsuHm8X6IrQfaiA4vecBUdxFzCXgPVaQxnkWmOozRdl6XXwwU_VLZe3b19VtAT8N9WFIIkJik8Qy00MGPYbE_lwLFdiCf_l6dLssYKXFUMJp6BGT8MPV_x9lVMznM-xbb59-2Zr34WrSss08waIA927rhArTzbCVoRy8lucA",
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
