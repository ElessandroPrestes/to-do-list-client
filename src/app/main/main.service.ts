import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { List } from './IList';
import { API_PATH } from 'src/environments/environment';
import { IUser } from '../auth/IUser';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${API_PATH}api/users`)
      .pipe(
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${API_PATH}api/lists`)
      .pipe(
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }


}
