import { Component, OnInit } from '@angular/core';
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
  adminUsername: String = '';
  adminPassword: String = '';
  userUsername: String = '';
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {
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
  add(): void {}
}
