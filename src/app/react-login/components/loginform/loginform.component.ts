import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
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
              private tservice: TravelServiceService) { 
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
    if (this.form.valid) {
      console.log("Successful login");
      localStorage.setItem('signedIn', 'true');
      localStorage.setItem('token', this.form.controls['username'].value)
      console.log(this.form.getRawValue());
    }
    else {
      console.log('User not verified!')
    }
  }

}
