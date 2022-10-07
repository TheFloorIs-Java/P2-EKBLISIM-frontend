import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/model/Account';
import { TravelServiceService } from 'src/app/service/travel-service.service';
import { LoginAuthService } from '../../services/login-auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private authService: LoginAuthService,
              private tservice: TravelServiceService,
              private router: Router) { 
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12), this.validatePassword]]
    });
  }

  userAccounts?: Account[];
  userAccount?: Account;

  ngOnInit(): void {
  }

  validatePassword(fc: FormControl) {
    // const value = fc.value as string;
    // const isInvalid = 'pa'
  }

  get controls() { return this.form.controls; }


  submitForm(): void {
    if (this.form.valid) {
      this.tservice.getUserLoginInput().subscribe(userAccounts => this.userAccounts = userAccounts); // First get the list of users from backend.
      console.log(this.userAccounts);
      if (this.userAccounts?.find((user) => { // Then check if user is in that list.
        // return (this.authService.loginAuthenticated("melogin", this.controls['username'].value, 
        //                                             "mepassword", this.controls['userPassword'].value));
        return (this.authService.loginAuthenticated(user.username, this.controls['username'].value, 
                                                    user.password, this.controls['userPassword'].value));
      }) !== null) { // In this case, if user DOES exist, sign user in.
        console.log("Successful user login");
        sessionStorage.setItem('signedIn', 'true');
        sessionStorage.setItem('token', this.controls['username'].value);
        // this.tservice.postUserLoginInput(this.controls['username'].value, this.controls['userPassword'].value);
        // console.log(this.form.getRawValue());
        this.router.navigate(['/packages']); // After user is verified to exist in database.
      } else {
        console.log("This user doesn't exists");
      }
    }
    else {
      console.log('Input not verified');
    }
  }

}
