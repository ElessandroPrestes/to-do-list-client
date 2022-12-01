import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subjUser$ = new BehaviorSubject<IUser | null>(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  signup(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(`${API_PATH}auth/signup`, user);
  }

  signin(credentials: { mail: string, password: string }): Observable<IUser> {
    return this.httpClient.post<IUser>(`${API_PATH}auth/signin`, credentials)
      .pipe(
        tap((u: IUser) => {
          localStorage.setItem('token', u.token);
          this.subjLoggedIn$.next(true);
          this.subjUser$.next(u);
        })
      )
  }

  isAuthenticated(): Observable<boolean> {
    return this.subjLoggedIn$.asObservable();
  }

  getUser(): Observable<IUser | null> {
    return this.subjUser$.asObservable();
  }

  logout() {

  }
}
