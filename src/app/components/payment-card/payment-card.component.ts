import { Component, OnInit, Input } from '@angular/core';
import { TravelServiceService } from 'src/app/service/travel-service.service';
import { Payment } from 'src/app/model/Payment';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent implements OnInit {
  // payments: Payment = {
  //   cardNumber: 0,
  //   securityCode: 0,
  //   expiryDate: '',
  // };
  @Input()
  cardNumber: any = '';
  @Input()
  securityCode: any = '';
  @Input()
  expiryDate: any = '';
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}
  submitPayment(): void {
    this.tservice.postUserPayment(
      this.cardNumber,
      this.securityCode,
      this.expiryDate
    );
  }
}
