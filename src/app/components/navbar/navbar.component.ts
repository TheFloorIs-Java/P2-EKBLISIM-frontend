import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapse: boolean = false;
  loggedIn: boolean = false;

  user: string | null = "";

  constructor() {}

  ngOnInit(): void {
    this.loggedIn = false;
    if (localStorage.getItem('signedIn')) {
      this.user = localStorage.getItem('token');
      this.loggedIn = true;
    }
  }
  collapseOnClick(): void {
    this.collapse = !this.collapse;
  }
}
