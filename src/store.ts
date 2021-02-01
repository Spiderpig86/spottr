import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface State {
  access_token: string | undefined;
}

const state: State = {
  access_token: "BQB-Jjnf5_-KRodn4OYp1g15FzTOI-8aGa_B5oQ8qEvkjtAz75h2DmkPorTuEOEiTDqzMV9FOor3sOy0zftOrEdvz4-0aiosOYLe-fyT8bpXvZYwnjB7BOiCdEjC6EPUBOqYEs5C6Lls4n62PF3ZJQ8C9LG4Ajazktc_obxBGeI-_AZCpapYHOE",
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
