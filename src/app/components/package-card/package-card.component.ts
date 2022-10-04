import { Component, OnInit, Input } from '@angular/core';
import { TravelServiceService } from 'src/app/service/travel-service.service';
import { Packages } from 'src/app/model/Packages';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css'],
})
export class PackageCardComponent implements OnInit {
  @Input()
  cart: Packages = {
    packageType: '',
    month: '',
    usState: '',
    packageDetails: '',
    packagePrice: 0.0,
  };
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}
  addToCart(): void {
    this.tservice.addToShoppingCart(this.cart);
  }
}
