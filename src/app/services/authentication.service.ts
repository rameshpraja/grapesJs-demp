import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  base_url = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {  
    return this.http.post(this.base_url + '/login', { email, password }).pipe(
      tap((result:any) => {
        localStorage.setItem('token', result.token);
      })
    );
  }
}
