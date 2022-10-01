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
  userLogin2: Array<Account> = [];
  userLogins: Array<Account> = [];
  @Input()
  userUsername: String = '';
  @Input()
  userPassword: String = '';
  isNotValid: boolean = false;

  constructor(private tservice: TravelServiceService,
              private authService: AuthService) {}

  ngOnInit(): void {}
  addUsers(): void {} // for registering new users

  submitUser(): void {
    this.isNotValid = false;
    this.tservice.getUserLoginInput().subscribe(data => {
      this.userLogins = data;
      console.log(this.userUsername);
      if (this.userLogins.find((user) => {
        return (this.authService
                  .loginAuthenticated(user.username, this.userUsername,
                                    user.password, this.userPassword));
      }) !== null) {
        // Get that user data and somehow populate the navbar with user's name, and move onto next page
      } else {
        this.isNotValid = true;
      };
    });
    // this.tservice.getAUser(this.userUsername, this.userPassword)
    // .subscribe((data) => {
    //   if (data !== null) {
    //     this.userLogin2.push(data);
    //     console.log(this.userLogin2);
    //     console.log(typeof(this.userLogin2));
    //     // console.log(this.userLogin.username);
    //     // console.log(this.userLogin.password);
    //     // console.log(data.username);
    //     // console.log(data.password);
    //   }
      
    // });
    // let userAccount = this.userLogins.find((user) => { return ( user.username === this.userUsername && user.password === this.userPassword ) });
    // console.log(userAccount);
    // if (this.authService.loginAuthenticated(this.userLogins.username,
    //   this.userUsername, this.userLogins.password, this.userPassword))
    // {
    //   this.tservice.postUserLoginInput(this.userUsername, this.userPassword);
    // } else {
    //   this.isValid = true;
    // }
  }
}
