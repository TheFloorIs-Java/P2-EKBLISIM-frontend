import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/Account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient ) { }

  isVerified: boolean = false;

  // getUserLoginInput(): Observable<Account> {
  //   return this.http.get<Account>(
  //     'https://632d094f519d17fb53b70ec4.mockapi.io/UserLogin/v1/logins'
  //   );
  // }

  loginAuthenticated(nameOnFile: String,
    nameEntered: String,
    passOnFile: String,
    passEntered: String): Boolean {
    // Default to false until determined to be true.
    this.isVerified = false;
    if (nameOnFile === nameEntered &&
      passOnFile === passEntered) {
      this.isVerified = true;
      }
      return this.isVerified;
  }

  logout(): void {
    localStorage.setItem('signedIn', 'false');
    localStorage.removeItem('token');
  }
}
