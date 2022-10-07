import { Component, OnInit, Input } from '@angular/core';
import { TravelServiceService } from 'src/app/service/travel-service.service';
import { Payment } from 'src/app/model/Payment';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginAuthService } from 'src/app/react-login/services/login-auth.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent implements OnInit {
  isValid: boolean = true;
  // @Input()
  cardNumber: any = '';
  // @Input()
  securityCode: any = '';
  // @Input()
  expiryDate: any = '';

  ngOnInit(): void {}
  submitPayment(): void {
    if (this.form.valid)
      if (
        this.controls['cardNumber'].value === '' &&
        this.controls['securityCode'].value === '' &&
        this.controls['expiryDate'].value === ''
      ) {
        this.isValid = false;
        this.router.navigate(['/payments']);
      } else {
        this.cardNumber = this.controls['cardNumber'].value;
        this.securityCode = this.controls['securityCode'].value;
        this.expiryDate = this.controls['expiryDate'].value;
        this.tservice.postUserPayment(
          this.cardNumber,
          this.securityCode,
          this.expiryDate
        );
        this.router.navigate(['/home']);
      }
  }

  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private authService: LoginAuthService,
    private tservice: TravelServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      securityCode: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
      expiryDate: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  get controls() {
    return this.form.controls;
  }
}
