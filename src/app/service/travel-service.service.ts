import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';

@Injectable({
  providedIn: 'root',
})
export class TravelServiceService {
  constructor(private http: HttpClient) {}
  getAdminLoginInput(): Observable<Account> {
    return this.http.get<Account>(
      'api endpoint for getting admin login credentials to compare'
    );
  }
  postAdminLoginInput(usernameInput: String, passwordInput: String): void {
    this.http
      .post<String>('API endpoint for posting admin login credentials', {
        username: usernameInput,
        password: passwordInput,
      })
      .subscribe((data) => console.log(data));
  }
}
