import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthConstants } from 'src/app/modules/auth/shared/services/auth.constants';

@Injectable()
export class MusicService {
  constructor(private http: HttpClient) {}

}
