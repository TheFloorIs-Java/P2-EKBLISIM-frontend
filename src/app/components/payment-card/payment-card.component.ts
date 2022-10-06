import { Component, OnInit, Input } from '@angular/core';
import { TravelServiceService } from 'src/app/service/travel-service.service';
import { Payment } from 'src/app/model/Payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent implements OnInit {
  isValid: boolean = true;
  @Input()
  cardNumber: any = '';
  @Input()
  securityCode: any = '';
  @Input()
  expiryDate: any = '';
  constructor(private tservice: TravelServiceService, private router: Router) {}

  ngOnInit(): void {}
  submitPayment(): void {
    if (
      this.cardNumber == '' &&
      this.expiryDate == '' &&
      this.securityCode == ''
    ) {
      this.isValid = false;
      this.router.navigate(['/payments']);
    } else {
      this.tservice.postUserPayment(
        this.cardNumber,
        this.securityCode,
        this.expiryDate
      );
      this.router.navigate(['/home']);
    }
  }
}
