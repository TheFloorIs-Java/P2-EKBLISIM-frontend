import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  logout(): void {
    localStorage.setItem('signedIn', 'false');
    localStorage.removeItem('token');
  }
}
