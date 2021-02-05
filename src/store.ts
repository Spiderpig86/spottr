import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQCeKKbsK3SoZI1Xg1-iuRXiUt58ZOP-xnlw0DifB8kkXfiDbkiKYKeCr_YxLQIypDzyfs8PuL0wHZ7Q7LIWEGEOWsG1NlcBq479F5gn90vN1smhUXh_fOwFIe1U5raCS1g1HJ7hFb3wLw48BPXw2447icP0NZJV7uYNMTs8uhpL8VJHJxlxeEo",
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
