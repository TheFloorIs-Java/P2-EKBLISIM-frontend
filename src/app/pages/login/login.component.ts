import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/model/Account';
import { TravelServiceService } from 'src/app/service/travel-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogins: Account = { username: '', password: '' };
  @Input()
  userUsername: String = '';
  @Input()
  userPassword: String = '';
  loginType: boolean = false;
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}
  addUsers(): void {} // for registering new users

  submitUser(): void {
    this.loginType = false;
    this.tservice.getUserLoginInput().subscribe((data) => {
      this.userLogins = data;
    });
    if (
      this.userLogins.username === this.userUsername &&
      this.userLogins.password === this.userPassword
    ) {
      this.tservice.postUserLoginInput(this.userUsername, this.userPassword);
    } else {
      this.loginType = true;
    }
  }
}
