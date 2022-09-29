import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/model/Account';
import { TravelServiceService } from 'src/app/service/travel-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  adminLogins: Account = { username: '', password: '' };
  @Input()
  adminUsername: String = '';
  @Input()
  adminPassword: String = '';
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}
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
}
