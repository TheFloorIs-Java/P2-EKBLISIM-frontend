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
  adminLogins: Account = { username: '', password: '' };
  @Input()
  adminUsername: String = '';
  @Input()
  adminPassword: String = '';
  @Input()
  userUsername: String = '';
  @Input()
  userPassword: String = '';
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}
  addUsers(): void {} // for registering new users
  submitAdmin(): void {
    this.tservice.getAdminLoginInput().subscribe((data) => {
      this.adminLogins = data;
    });
    if (
      this.adminLogins.username == this.adminUsername &&
      this.adminLogins.password == this.adminPassword
    ) {
      this.tservice.postAdminLoginInput(this.adminUsername, this.adminPassword);
    }
  }
  submitUser(): void {
    this.tservice.getUserLoginInput().subscribe((data) => {
      this.userLogins = data;
    });
    if (
      this.userLogins.username == this.userUsername &&
      this.userLogins.password == this.userPassword
    ) {
      this.tservice.postUserLoginInput(this.userUsername, this.userPassword);
    }
  }
}
