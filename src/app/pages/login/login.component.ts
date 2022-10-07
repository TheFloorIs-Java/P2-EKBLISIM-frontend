import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
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

  constructor(
    private tservice: TravelServiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  submitUser(): void {
    this.loginType = false;
    // this.tservice.getUserLoginInput().subscribe((data) => {
    //   // this.userLogins = data;
    // });
    if (
      this.authService.loginAuthenticated(
        this.userLogins.username,
        this.userUsername,
        this.userLogins.password,
        this.userPassword
      )
    ) {
      this.tservice.postUserLoginInput(this.userUsername, this.userPassword);
    } else {
      this.loginType = true;
    }
  }
}
