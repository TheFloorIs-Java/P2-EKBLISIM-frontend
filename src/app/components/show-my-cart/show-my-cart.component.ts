import { Component, OnInit } from '@angular/core';
import { TravelServiceService } from 'src/app/service/travel-service.service';
import { Packages } from 'src/app/model/Packages';

@Component({
  selector: 'app-show-my-cart',
  templateUrl: './show-my-cart.component.html',
  styleUrls: ['./show-my-cart.component.css'],
})
export class ShowMyCartComponent implements OnInit {
  showCart: boolean = false;
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}

  getPackagesFromService(): Array<Packages> {
    return this.tservice.addToCart;
  }
  removePackagesFromService(): void {
    this.tservice.removeFromShoppingCart();
  }
  getTotalPriceFromService(): number {
    return this.tservice.getTotalPrice();
  }
}
