import { Component, Input, OnInit } from '@angular/core';
import { TravelServiceService } from 'src/app/service/travel-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input()
  createUsername: String = '';
  @Input()
  createPassword: String = '';

  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {}
  submitCredentials(): void {
    this.tservice.postUserLoginInput(this.createUsername, this.createPassword);
  }
}
