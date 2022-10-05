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

  ngOnInit(): void {
  }

  validatePassword(fc: FormControl) {
    // const value = fc.value as string;
    // const isInvalid = 'pa'
  }

  get controls() { return this.form.controls; }

  submitForm(): void {
    // this.loginType = false;
    // this.tservice.getUserLoginInput().subscribe((data) => {
    //   this.userLogins = data;
    // });
    // if (
    //   this.authService.loginAuthenticated(
    //     this.userLogins.username,
    //     this.userUsername,
    //     this.userLogins.password,
    //     this.userPassword
    //   )
    // ) {
    //   this.tservice.postUserLoginInput(this.userUsername, this.userPassword);
    // } else {
    //   this.loginType = true;
    // }
    // let accounts = this.authService.getUserLoginInput();
    if (this.form.valid) {
      if (this.authService.loginAuthenticated("melogin", this.controls['username'].value, "mepassword", this.controls['userPassword'].value))
      {
        console.log("Successful login");
        localStorage.setItem('signedIn', 'true');
        localStorage.setItem('token', this.controls['username'].value)
        // localStorage.setItem('userSession', JSON.stringify({ // This would be the existing user's data gotten from the API
        //   username: this.controls['username'],
        //   userPassword: this.controls['userPassword']
        // }));
        console.log(this.form.getRawValue());
        this.router.navigate(['/packages']); // After user is verified to exist in database.
      }
    }
    else {
      console.log('User not verified!')
    }
  }

}
