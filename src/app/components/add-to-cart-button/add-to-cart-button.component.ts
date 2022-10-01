import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent implements OnInit {
  constructor() {}
  @Output()
  buttonClicked: EventEmitter<any> = new EventEmitter<any>(); // custom event firing

  ngOnInit(): void {}
  processButtonClick() {
    this.buttonClicked.emit();
  }
}
