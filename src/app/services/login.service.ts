import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  addLogin(userName: String, password: String) : void {
    this.http.post<any>("some API uri",
    {
      userName: userName,
      password: password
    }).subscribe(data => console.log(data));
  }
}
