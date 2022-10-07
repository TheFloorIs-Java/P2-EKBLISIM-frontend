import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapse: boolean = false;

  isLoggedIn: boolean = this.userLoggedIn();
  user: string | null = '';

  constructor() {}

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('signedIn'));
    // console.log(sessionStorage.getItem('token'));
    // if (sessionStorage.getItem('token') !== null) {
    //   this.user = sessionStorage.getItem('token');
    //   this.isLoggedIn = true;
    // }
  }

  userLoggedIn(): boolean {
    console.log(sessionStorage.getItem('signedIn'));
    console.log(sessionStorage.getItem('token'));
    if (sessionStorage.getItem('signedIn') === 'true') {
      this.user = sessionStorage.getItem('token');
      // this.isLoggedIn = true;
      return true;
    }
    return false;
  }
  onClickLogOut(): void {
    sessionStorage.clear();
  }

  collapseOnClick(): void {
    this.collapse = !this.collapse;
  }
}
