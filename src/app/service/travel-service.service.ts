import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';
import { Packages } from '../model/Packages';

@Injectable({
  providedIn: 'root',
})
export class TravelServiceService {
  addToCart: Array<Packages> = [];
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
  getUserLoginInput(): Observable<Account> {
    return this.http.get<Account>(
      'https://632d094f519d17fb53b70ec4.mockapi.io/UserLogin/v1/logins'
    );
  }
  postUserLoginInput(usernameInput: String, passwordInput: String): void {
    this.http
      .post<String>(
        'https://632d094f519d17fb53b70ec4.mockapi.io/UserLogin/v1/logins',
        {
          username: usernameInput,
          password: passwordInput,
        }
      )
      .subscribe((data) => console.log(data));
  }
  getAllTravelPackages(): Observable<Packages[]> {
    return this.http.get<Packages[]>('http://localhost:8080/packages');
  }
  addToShoppingCart(added: Packages) {
    this.addToCart.push(added);
    console.log(this.addToCart);
  }
}
