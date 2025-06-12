import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const data = new URLSearchParams();
    data.set('username', email);
    data.set('password', password);

    return this.http.post<{ access_token: string }>('/api/token', data.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).pipe(
      tap(response => {
        this.token = response.access_token;
        localStorage.setItem('token', this.token);
      })
    );
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }
}
