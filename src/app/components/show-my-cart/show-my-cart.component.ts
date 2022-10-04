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
  changeDropdown(): void {
    this.showCart = !this.showCart;
  }

  getPackagesFromService(): Array<Packages> {
    return this.tservice.addToCart;
  }
}
