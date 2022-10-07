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
  loggedInUser?: Account;

  constructor(private http: HttpClient) {}
  getAdminLoginInput(): Observable<Account> {
    return this.http.get<Account>('');
  }
  postAdminLoginInput(usernameInput: String, passwordInput: String): void {
    this.http
      .post<String>('', {
        username: usernameInput,
        password: passwordInput,
      })
      .subscribe((data) => console.log(data));
  }
  getUserLoginInput(): Observable<Account[]> {
    return this.http.get<Account[]>(
      // 'https://632d094f519d17fb53b70ec4.mockapi.io/UserLogin/v1/logins'
      'https://632d094f519d17fb53b70ec4.mockapi.io/UserLogin/v1/logins'
    );
  }

  // getUserLoginInput(): void {
  //   this.http.get<Account[]>(
  //     'https://632d094f519d17fb53b70ec4.mockapi.io/UserLogin/v1/logins'
  //   ).subscribe(data => { this.userAccounts = data; });
  // }

  // Possibly also await the result when posted to backend. (Use another endpoint)
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
  postUserRegisterInput(usernameInput: String, passwordInput: String): void {
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
  getAllTravelPackages(): Observable<Array<Packages>> {
    return this.http.get<Array<Packages>>('http://localhost:8080/packages');
  }
  addToShoppingCart(added: Packages) {
    this.addToCart.push(added);
    console.log(this.addToCart);
  }
  removeFromShoppingCart() {
    this.addToCart.pop();
  }

  getTotalPrice(): number {
    let sum: number = 0;
    this.addToCart.forEach((packages) => {
      sum += packages.price;
    });
    return Math.round(sum * 100) / 100;
  }

  postUserPayment(
    cardNumberInput: number,
    securityCodeInput: number,
    expiryDateInput: any
  ): void {
    this.http
      .post<any>('http://localhost:8080/payments', {
        cardNumber: cardNumberInput,
        securityCode: securityCodeInput,
        expiryDate: expiryDateInput,
      })
      .subscribe((data) => console.log(data));
  }
}
