import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-regsuccess',
  templateUrl: './regsuccess.component.html',
  styleUrls: ['./regsuccess.component.css']
})
export class RegsuccessComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.setIsVerified();
    setTimeout(() => {
      this.router.navigate(['packages']);
    }, 3000);
  }

}
