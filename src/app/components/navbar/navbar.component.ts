import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapse: boolean = false;
  loggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  collapseOnClick(): void {
    this.collapse = !this.collapse;
  }
}
